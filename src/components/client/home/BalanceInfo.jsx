/* eslint-disable react/prop-types */
const BalanceInfo = ({ username, balance }) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-bold">Welcome Back {username}!</h2>
      <div className="mt-4">
        <span className="text-3xl">$</span>
        <span className="text-6xl font-bold">{balance}</span>
        <span className="text-xl"> Dlls.</span>
      </div>
      <p className="mt-2 text-gray-400">Your Balance</p>
    </div>
  );
};

export default BalanceInfo;
