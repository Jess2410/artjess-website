import React from 'react'
import styles from "./Paypal.module.css";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useRouter } from 'next/router';



const paypalScriptOptions = {
  "client-id":
    "AaUpVv8WDVM5uezwsQo79K6YBKmqm3EeLSOx5TFTX4RM2_ephwW68aJ4_ASXYPjbI8OyuXchwgkQ7bRl",
  currency: "EUR"
};

export default function Paypal({amount}) {
  return (
    <div className={styles.app}>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button amount={amount} />
      </PayPalScriptProvider>
    </div>
  );
}
function Button({amount}) {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: amount
            }
          }
        ]
      });
    },
    onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details) => {

          const name = details.payer.name.given_name;
          window.location.replace("/success_page");
          alert(`Thank you so much for your order :  ${name}`);
          localStorage.clear();

        // alert(
        //   "Transaction completed by" +
        //     (details?.payer.name.given_name ?? "No details")
        // );

        // alert("Data details: " + JSON.stringify(data, null, 2));
      });
    }
  };
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}