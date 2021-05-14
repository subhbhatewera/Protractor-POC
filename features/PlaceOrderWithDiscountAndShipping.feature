Feature: Create Orders with Discount

Scenario Outline: Create Orders with Discount and Shipping

Given Enter "<email>", "<password>" and login 
When User select a "<productName>", enter "<discountCode>", select "<shipping>" and Checkout
And Make Payment using "<cardNumber>", "<name>", "<expirationDate>" and "<securityCode>"
Then Order will be placed and Order number will be returned

Examples:
    | email | password | productName | discountCode | shipping | cardNumber | name | expirationDate | securityCode |
    | EdwardMFish@fleckens.hu | webgility  | Ali-Ra Latte High-Neck Winter Coat  | proc-cucu-disc | FedEx | 4111111111111111 | Edward | 0222 | 458 |