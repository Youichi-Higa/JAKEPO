import React, { useState } from "react";

const Web3 = require("web3");

// Metamaskのインストール確認
if (!window.ethereum || !window.ethereum.isMetaMask) {
  alert("MetaMaskをインストールしてください。");
}

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onClickMetamaskConnect = async () => {
    // ログイン
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
  };

  return (
    <button onClick={onClickMetamaskConnect} disabled={isLogin}>
      Metamaskにログイン
    </button>
  );
};
