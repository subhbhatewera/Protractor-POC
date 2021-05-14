Feature: Create Orders with Shipping

Scenario Outline: Create Orders with only Shipping

Given Enter "<email>", "<password>" and login 
When User select a "<productName>", select "<shipping>" and Checkout
And Make Payment using "<cardNumber>", "<name>", "<expirationDate>" and "<securityCode>"
Then Order will be placed and Order number will be returned

Examples:
    | email | password | productName | shipping | cardNumber | name | expirationDate | securityCode |
    | SueJSawyer@armyspy.com  | webgility  | X-Press Men's Collared Sweater  | FedEx | 6011111111111117 | Suej | 0523 | 951 |