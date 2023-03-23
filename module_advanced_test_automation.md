# Test automation questions

### Testing Basics (ISTQB related)

#### What is the purpose of testing? What is not?
#### What is the difference between Defect, Error, Failure?
The terms: error, defect, bug, and failure are closely related in software development.
An error leads to a defect, and when these defects go undetected, they lead to failure. 
An error is a mistake made by a developer in the code.
#### What are the testing principles?
Testing shows presence of defects
Exhaustive testing is not possible
Early testing
Defect clustering
Pesticide paradox
Testing is context dependent
Absence of errors fallacy
#### What is unit testing? Who is responibile to write unit tests?
Unit testing is a software development process in which the smallest testable parts of an application,
called units, are individually and independently scrutinized for proper operation.
This testing methodology is done during the development process by the software developers.
#### What are Test Levels, what is the difference between them?
Unit/Component Testing
Integration testing
System testing
Acceptance testing
#### What is the difference between verification and validation?
How Do Verification and Validation Differ? The distinction between the two terms is largely due to the role of specifications.
Validation is the process of checking whether the specification captures the customer's requirements,
while verification is the process of checking that the software meets specifications.
#### What are Testing Types, what is the difference between them?
#### What is the difference between white box, grey boy and black box testing?
Black box testing is a type of software testing in which the functionality of the software is not known.
The testing is done without the internal knowledge of the products. It is also called Functional testing. 
Black-box testing focuses on software’s external attributes and behavior. 
This type of testing looks at an application’s software expected behavior from the user’s point of view

White-box testing or glass-box testing is a software testing technique that tests the software by using the knowledge of internal data structures,
physical logic flow, and architecture at the level of source code. 
This testing works by looking at testing from the developer’s point of view.
This testing is also known as glass box testing, clear box testing, structural testing, or non-functional testing.

Gray Box Testing is a combination of the Black Box Testing technique and the White Box Testing technique in software testing.
The gray-box testing involves inputs and outputs of a program for the testing purpose but test design is tested by using the information about the code.
Gray-box testing is well suited for web application testing because it factors in a high-level design environment and the inter-operability conditions.
#### What is the difference between UAT (User Acceptance Testing) and System testing?
System testing is done to check whether the software or product meets the specified requirements or not.
Acceptance testing is the type of testing which is used to check whether the software meets the customer requirements or not.
#### Mention the differences between Regression Testing, Smoke Testing and Retesting?
Regression testing is performed to check whether the changed code affects the existing features or not.
A smoke test is performed quickly to confirm whether to accept or reject the build.
Retesting is done to check that the initial bug which was found and fixed is working as it should.
#### What is risk-based testing, whats the point of it?
Risk-based testing applies the principles of risk management to testing activities.
It aims to: Create and offer a framework that facilitates clear discussion between testers, developers, and other stakeholders about the risks at hand.
Essentially, it isolates risks to make them identifiable and actionable.
#### What is the difference between Static and Dynamic Testing?
Static testing prevents the defects. Dynamic testing finds and fixes the defects. 
Static testing is performed before code deployment.
Dynamic testing is performed after code deployment.
#### Compare V-modell, Waterfall, Agile from testing perspective!
Waterfall: The main concept of this model is that only when one development level is completed will the next one be initiated.
V-modell: The main idea in the V-Model is that development tasks and testing tasks are corresponding activities of equal importance, which is symbolized by the two sides of the “V”.
Agile: The Agile Model of software development is a conceptual framework for software engineering that promotes development iterations throughout the life-cycle of the project.
#### What would you test in case of a simple webshop purchasing function (put items to cart, buy them)? Plan and reason your tests.

### Reporting, Bugs

#### What steps would you follow when you find a defect?
#### Talk about common test reports, and about their details.
#### What does a bug report contains?
#### How would you prioritize a bug?

### Test Automation, Selenium

#### Which testcases should be be automated and which shouldn't?
Repetitive tests that run for multiple builds
Tests that tend to cause human error
Tests that require multiple data sets
Frequently used functionality that introduces high risk conditions
Tests that are impossible to perform manually
Tests that run on several different hardware or software platforms and configurations
Tests that take a lot of effort and time when manual testing
#### Describe a good automated test!
Test code should be clean code that makes sense to read, is well-organized, and doesn't repeat itself. 
An automated regression suite that takes eight hours to run is not going to provide fast feedback to a development team. 
We want tests that run as quickly as possible to let the team know if there's a problem.
#### What is Selenium, Selenium IDE, Selenium WebDriver?
Selenium IDE (Integrated Development Environment) is primarily a record/run tool that a test case developer uses to develop Selenium Test cases.
Selenium is an open-source tool that is used for automating the tests carried out on web browsers.
Selenium WebDriver is a web framework that permits you to execute cross-browser tests. 
This tool is used for automating web-based application testing to verify that it performs expectedly. 
Selenium WebDriver allows you to choose a programming language to create test scripts.
#### How can be web elements indentified?
There are multiple ways to uniquely identify a web element/elements within the web page such as: 
ID, Name, Class Name, Link Text, Partial Link Text, Tag Name and XPATH.
#### How can you wait for elements, what can go wrong? Collect possible errors and root causes.
#### Compare POM and Keyword Driven Testing!
Page object model is a repository which stores the details about all the elements in a web page. 
And, Keyword driven framework is used to execute one or more methods defined in a class.
#### Whats the difference between TDD and BDD?
TDD is a development practice while BDD is a team methodology. 
In TDD, the developers write the tests while in BDD the automated specifications are created by users or testers (with developers wiring them to the code under test.) 
For small, co-located, developer-centric teams, TDD and BDD are effectively the same.
#### What is API testing and why would you use that?
API testing is a type of software testing that analyzes an application program interface (API) to verify it fulfills its expected functionality, security, performance and reliability. 
The tests are performed either directly on the API or as part of integration testing.
#### What is Data Driven Testing and why is it useful?
Data-driven testing (DDT) is data that is external to your functional tests, and is loaded and used to extend your automated test cases. 
You can take the same test case and run it with as many different inputs as you like, thus getting better coverage from a single test.
#### What are the challenges and best practices with dynamically loading web elements?
#### What are the challenges of Mobile Test Automation?
Device Fragmentation.
Different Screen Resolutions.
Updated Device Models.
Testing a Mobile App on Staging.
Mobile Network Bandwidth Issues.
Mobile App Security.
Real User Condition Testing.
Different Types of Applications.

### Advanced Topics

#### What is the difference between CI and CD?
CI, short for Continuous Integration, is a software development practice in which all developers merge code changes in a central repository multiple times a day. 
CD stands for Continuous Delivery, which on top of Continuous Integration adds the practice of automating the entire software release process.
#### Describe a Continuous Delivery!
#### Compare 2 popular CI systems, one of them should be Jenkins!
#### What is Docker, why is it useful?
Docker is an open source platform that enables developers to build, deploy, run, update and manage containers—standardized,
executable components that combine application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.
#### Compare 2 popular Test Automation IDE, one of them should be Katalon Studio!