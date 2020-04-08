Feature: Sample feature for Google.com
   Feature Description
   Scenario: Go to Google and check page title
   Given I disable Angular check for Protractor
   When I go to Google main page
   Then page title contains "Google" text