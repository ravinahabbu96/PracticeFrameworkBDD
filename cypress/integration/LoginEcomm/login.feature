Feature: End to End E-commerce Validation

    Scenario Outline: Login with multiple users
        Given Navigate to Practice Automation Site
        And User log-in using <username>
        And User log-in password <password>
        When User click on submit button
        Then Dashbord test should be visible

        Examples:
            | username        | password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |



