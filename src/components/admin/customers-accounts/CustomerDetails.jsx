/* eslint-disable react/prop-types */
const CustomerDetails = ({ customer, onEdit }) => {
  const {
    name,
    username,
    gov_id,
    address = {},
    cell_phone,
    email_address,
    work_name,
    monthly_income,
  } = customer;

  const { street = "", city = "", state = "", zip = "" } = address;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex justify-end col-span-2">
        <button onClick={onEdit} className="text-gray-400 hover:text-white">
          ✏️
        </button>
      </div>
      <div>
        <p>
          <strong>Name</strong>
        </p>
        <p>{name}</p>
      </div>
      <div>
        <p>
          <strong>Cellphone</strong>
        </p>
        <p>{cell_phone}</p>
      </div>
      <div>
        <p>
          <strong>Username</strong>
        </p>
        <p>{username}</p>
      </div>
      <div>
        <p>
          <strong>Email Address</strong>
        </p>
        <p>{email_address}</p>
      </div>
      <div>
        <p>
          <strong>ID</strong>
        </p>
        <p>{gov_id}</p>
      </div>
      <div>
        <p>
          <strong>Work Name</strong>
        </p>
        <p>{work_name}</p>
      </div>
      <div>
        <p>
          <strong>Street</strong>
        </p>
        <p>{street}</p>
      </div>
      <div>
        <p>
          <strong>City</strong>
        </p>
        <p>{city}</p>
      </div>
      <div>
        <p>
          <strong>State</strong>
        </p>
        <p>{state}</p>
      </div>
      <div>
        <p>
          <strong>Zip</strong>
        </p>
        <p>{zip}</p>
      </div>
      <div>
        <p>
          <strong>Monthly Income</strong>
        </p>
        <p>{monthly_income}</p>
      </div>
    </div>
  );
};

export default CustomerDetails;
