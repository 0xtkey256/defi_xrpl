const { Client, Wallet, xrpToDrops } = require("xrpl");

const senderWallet = Wallet.fromSecret("sEdTXfWJ4R35M8v9RPdk571EHbRrbo1");
// rKBE3kweC1NQMr5S4kc5Xf3pe54LpWMjeo

const receiverWallet = Wallet.fromSecret("sEdVRRbvZpSUs2RHKPQiwwtkhtJ9bnu");
// r4f2LMxzkWHbhyVh7DLTXi2LdhmHMixKeT

const client = new Client("wss://testnet.xrpl-labs.com");

const createCheck = async () => {
  await client.connect();
  await client.submitAndWait(
    {
      TransactionType: "CheckCreate",
      Account: "rKBE3kweC1NQMr5S4kc5Xf3pe54LpWMjeo",
      Destination: "r4f2LMxzkWHbhyVh7DLTXi2LdhmHMixKeT",
      SendMax: xrpToDrops(10),
    },
    { wallet: senderWallet }
  );
};

const getChecks = async () => {
  await client.connect();
  // Get Checks associated with the destination account
  const response = await client.request({
    command: "account_objects",
    account: "r4f2LMxzkWHbhyVh7DLTXi2LdhmHMixKeT",
    ledger_index: "validated",
    type: "check",
  });
  console.log(response.result.account_objects);
};

const cashCheck = async () => {
  await client.connect();
  await client.submitAndWait(
    {
      TransactionType: "CheckCash",
      Account: "r4f2LMxzkWHbhyVh7DLTXi2LdhmHMixKeT",
      // Retrieve CheckID from the result of getChecks (account_objects command)
      CheckID:
        "8EA7DD1445AB15FCB59129F8548E1DB7A39EDB1DDF65888211D9F311DC20E450",
      Amount: xrpToDrops(10),
    },
    { wallet: receiverWallet }
  );
};

// Call the functions as needed
// createCheck();
// getChecks();
// cashCheck();
