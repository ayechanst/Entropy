import NewTaskBtn from "./NewTaskBtn";

const Footer = () => {
  return (
    <div className="btm-nav">
      <button className="text-primary active">
        Balances
      </button>
      <button className="text-primary active">Vote</button>
      <button className="text-primary active">
        Account
      </button>
      <button className="text-primary active">
        Sign Out
      </button>
    </div>
  );
};

export default Footer;
