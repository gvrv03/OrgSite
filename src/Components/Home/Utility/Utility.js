import Spinner from "./Spinner";

export const DefaultBTN = ({ name, loading, clickHandle }) => {
  return (
    <button
      type="submit"
      disabled={loading ? true : false}
      onClick={clickHandle}
      className="bg-primaryColor text-white font-semibold py-2"
    >
      {loading ? <Spinner /> : name}
    </button>
  );
};
