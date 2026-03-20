import requests
import sys
import json
from datetime import datetime

class StartUp13APITester:
    def __init__(self, base_url="https://startup13-web.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            result = {
                "test_name": name,
                "endpoint": endpoint,
                "method": method,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response": response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text[:200]
            }
            
            self.test_results.append(result)
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.headers.get('content-type', '').startswith('application/json'):
                    print(f"   Response: {json.dumps(response.json(), indent=2)}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")

            return success, response.json() if response.headers.get('content-type', '').startswith('application/json') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                "test_name": name,
                "endpoint": endpoint,
                "method": method,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "",
            200
        )
        return success

    def test_contact_post(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "phone": "+1234567890",
            "subject": "Test Subject",
            "message": "This is a test message from the backend testing script.",
            "language": "en"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and response.get('success'):
            print(f"   Message ID: {response.get('id')}")
            return response.get('id')
        return None

    def test_contact_get(self):
        """Test getting contact messages"""
        success, response = self.run_test(
            "Get Contact Messages",
            "GET",
            "contact",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   Found {len(response)} contact messages")
            return len(response) > 0
        return success

    def test_contact_arabic_submission(self):
        """Test Arabic contact form submission"""
        test_data = {
            "name": "مستخدم اختبار",
            "email": "test-arabic@example.com",
            "phone": "+90 551 044 3444",
            "subject": "موضوع اختبار",
            "message": "هذه رسالة اختبار باللغة العربية من سكريبت اختبار الخادم الخلفي.",
            "language": "ar"
        }
        
        success, response = self.run_test(
            "Arabic Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and response.get('success'):
            print(f"   Arabic Message ID: {response.get('id')}")
            return response.get('id')
        return None

def main():
    print("🚀 Start Up 13 Backend API Testing")
    print("=" * 50)
    
    # Setup
    tester = StartUp13APITester()

    # Run tests
    print("\n📡 Testing API connectivity...")
    if not tester.test_api_root():
        print("❌ API root endpoint failed, stopping tests")
        return 1

    print("\n📝 Testing contact form functionality...")
    contact_id = tester.test_contact_post()
    if not contact_id:
        print("⚠️  Contact form submission failed")

    print("\n📋 Testing contact messages retrieval...")
    if not tester.test_contact_get():
        print("⚠️  Contact messages retrieval failed")

    print("\n🌐 Testing Arabic contact form...")
    arabic_id = tester.test_contact_arabic_submission()
    if not arabic_id:
        print("⚠️  Arabic contact form submission failed")

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Tests Summary: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed. Check the details above.")
        
        # Print failed tests
        print("\n❌ Failed Tests:")
        for result in tester.test_results:
            if not result['success']:
                error_msg = result.get('error', f'Status {result.get("actual_status")}')
                print(f"   - {result['test_name']}: {error_msg}")
        
        return 1

if __name__ == "__main__":
    sys.exit(main())