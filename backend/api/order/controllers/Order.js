"use strict";
/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */
// note that this needs to be a "private" key from STRIPE
const stripe = require("stripe")(
    // Enter your private key for test environment of STRIPE here
  "sk_test_51NIwYcDmUeg0Tz3H36ovSs2X950mOMBdzEq4FYhO2S7FQiJilHF9pyF5SjEdAHrTUFwDeNuGd4lyYqQe8juOVIhP00boz3EkX8"

 );
module.exports = {
  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

 
  create: async (ctx) => {
    const { address, amount, dishes, token, city, state } = JSON.parse(
      ctx.request.body
    );
    const stripeAmount = Math.floor(amount * 100);
    // charge on stripe
    const charge = await stripe.charges.create({
      // Transform cents to dollars.
      amount: stripeAmount,
      currency: 'usd',
      payment_method: 'pm_card_visa',
      description: `Order ${new Date()} by ${ctx.state.user._id}`,
      source: token,
    });



    // Register the order in the database
    const order = await strapi.services.order.create({
      user: ctx.state.user.id,
      charge_id: charge.id,
      amount: stripeAmount,
      address,
      dishes,
      city,
      state,
 

 
    });
    return order;
  },
};

