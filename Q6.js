let payment_method = "credit";


switch (payment_method) {
    case 'credit':
        console.log("Processing fees is of 2%.");
        break;

    case 'debit':
        console.log("Processing fess of 1.5%.");
        break;

    case 'paypal':
        console.log("Processing fees of 3%.");
        break;

    default:
        console.log("Enter the valid payment method.");
}