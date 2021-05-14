Feature: Create Orders with Discount

Scenario Outline: Create Orders with only Discount

Given Enter "<email>", "<password>" and login 
When User select a "<productName>", enter "<discountCode>" and Checkout
And Make Payment using "<cardNumber>", "<name>", "<expirationDate>" and "<securityCode>"
Then Order will be placed and Order number will be returned

Examples:
    | email | password | productName | discountCode | cardNumber | name | expirationDate | securityCode |
    | RetaJConover@superrito.com | webgility  | Ali-Ra Clean Cut Skinny Jeans  | proc-cucu-disc | 5555555555554444 | Reta | 0222 | 458 |