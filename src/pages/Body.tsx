import Uploader from "../components/static/Uploader";
import ViewProfile from "../components/static/ViewProfile";
import { CgProfile } from "react-icons/cg";
import EditProfile from "../components/static/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { ontoggleState } from "../global/GlobalState";
import { FaUserEdit } from "react-icons/fa";
// import { FcCancel } from "react-icons/fc"
import { ImCancelCircle } from "react-icons/im";

const Body = () => {
  const userState = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const onToggleIt = () => {
    dispatch(ontoggleState(!userState));
  };

  console.log(userState);
  return (
    <>
      <div className="flex w-full flex-col min-h-[100vh] items-center justify-center bg-slate-100">
        <div className="flex text-[20px] mt-[80px] my-2 text-slate-500 font-semibold w-[80%]">
          <div className="mr-2 text-[dodgerblue]">
            <CgProfile />
          </div>
          {userState ? (
            <span className="capitalize"> profile</span>
          ) : (
            <span className="capitalize"> Edit Profile</span>
          )}
        </div>
        <div className="w-[80%] p-10 flex justify-between  min-h-[90%] bg-white">
          <Uploader />

          {userState ? (
            <div className="w-[60%] ">
              <ViewProfile />
              <button
                className="px-[20px] rounded bg-[dodgerblue] text-white capitalize text-[14px] hover:scale-95 py-2 border-[1px] border-[dodgerblue] flex items-center"
                onClick={() => {
                  onToggleIt();
                }}
              >
                <FaUserEdit />
                <span className="ml-2">Edit Profile</span>
              </button>
            </div>
          ) : (
            <div className="w-[60%] flex flex-col">
              <EditProfile />
              <div className="flex">
                <button
                  className="px-[20px] rounded bg-[dodgerblue] text-white capitalize text-[14px] hover:scale-95 py-2 border-[1px] border-[dodgerblue] flex items-center mr-2"
                  onClick={() => {
                    onToggleIt();
                  }}
                >
                  <FaUserEdit />
                  <span className="ml-2">Save updates</span>
                </button>
                <button
                  className="px-[20px] rounded bg-white text-[dodgerblue] capitalize text-[14px] hover:scale-95 py-2 border-[1px] border-[dodgerblue] flex items-center"
                  onClick={() => {
                    onToggleIt();
                  }}
                >
                  <ImCancelCircle className="text-[dodgerblue]" />
                  <span className="ml-2">Cancel updates</span>
                </button>
              </div>
            </div>
          )}
          {/* <EditProfile /> */}
        </div>
      </div>
    </>
  );
};

export default Body;
