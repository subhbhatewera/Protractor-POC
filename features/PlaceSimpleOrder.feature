Feature: Create a Simple Order

Scenario Outline: Create an Order without Shipping, Gift Card and Discount
Given Enter "<email>", "<password>" and login 
When User select a "<productName>" and Checkout
And Make Payment using "<cardNumber>", "<name>", "<expirationDate>" and "<securityCode>"
Then Order will be placed and Order number will be returned

Examples:
    | email | password | productName | cardNumber | name | expirationDate | securityCode |
    | LilliJWhite@einrot.com  | webgility  | Flying Machine Slim Fit Jeans  | 378282246310005 | Lilli | 1222 | 258 |
    | SueJSawyer@armyspy.com  | webgility  | Men's Gili-Levi's Light Bootcut  | 6011111111111117 | Suej | 0523 | 951 |
    | JessicaTSaulter@teleworm.us  | webgility  | Assembly0504  | 5555555555554444 | Jessica | 1021 | 853 |
