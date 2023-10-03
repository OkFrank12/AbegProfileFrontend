import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const EditProfile = () => {
  const [parent] = useAutoAnimate();
  const [user, setUser] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(false);

  const onHandleRender = () => {
    setRender(true);
    setCompany(false);
    setUser(false);
  };
  const onHandleUser = () => {
    setUser(true);
    setRender(false);
    setCompany(false);
  };
  const onHandleCompany = () => {
    setCompany(true);
    setRender(false);
    setUser(false);
  };

  console.log(render);
  console.log(user);
  console.log(company);
  return (
    <>
      <div className="w-full min-h-[100px] flex flex-col">
        <div className="w-full flex justify-between">
          <div
            className={`w-[30%] text-[10px] cursor-pointer ${
              company
                ? "text-[dodgerblue] bg-[white]"
                : "bg-[dodgerblue] text-white"
            } capitalize rounded-md p-1 flex justify-center items-center h-[50px]`}
          >
            <div
              className="w-full h-full flex justify-center items-center border rounded-md"
              onClick={onHandleCompany}
            >
              company's credentials
            </div>
          </div>
          <div
            className={`w-[30%] text-[10px] cursor-pointer ${
              user
                ? "text-[dodgerblue] bg-[white]"
                : "bg-[dodgerblue] text-white"
            } rounded-md p-1 flex justify-center items-center  h-[50px] `}
          >
            <div
              className="w-full h-full flex justify-center items-center border rounded-md capitalize"
              onClick={onHandleUser}
            >
              naming credentials
            </div>
          </div>
          <div
            className={`w-[30%] text-[10px] cursor-pointer capitalize ${
              render
                ? "text-[dodgerblue] bg-[white]"
                : "bg-[dodgerblue] text-white"
            } rounded-md p-1 flex justify-center items-center h-[50px] `}
          >
            <div
              className="w-full h-full flex justify-center items-center border rounded-md"
              onClick={onHandleRender}
            >
              other credentials
            </div>
          </div>
        </div>
        <br />
        {render ? (
          <div ref={parent}>
            <input
              placeholder="Phone Number"
              className="w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />

            <textarea
              placeholder="Description"
              className=" w-[100%] pt-2 text-[14px] h-[100px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
          </div>
        ) : user ? (
          <div>
            <input
              placeholder="Enter your username"
              className="w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />

            <input
              placeholder="Enter your full name"
              className=" w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
          </div>
        ) : company ? (
          <div>
            <input
              placeholder="Enter your company name"
              className="w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />

            <input
              placeholder="Enter your company role"
              className=" w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
            <input
              placeholder="Enter your company location"
              className=" w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
          </div>
        ) : null}
        {/* 
        <input
          placeholder="Enter your email address"
          className=" w-[100%] h-[35px] pl-2 bg-slate-100 outline-none"
        />

        <br />

        <input
          placeholder="Your Company Role"
          className=" w-[100%] h-[35px] pl-2 bg-slate-100 outline-none"
        />
        <br />

        <input
          placeholder="Your Company's Name "
          className=" w-[100%] h-[35px] pl-2 bg-slate-100 outline-none"
        />
        <br />

        <input
          placeholder="Your Company's Location"
          className=" w-[100%] h-[35px] pl-2 bg-slate-100 outline-none"
        />
        <br />

        <textarea
          placeholder="Your Description"
          className="h-[150px] py-2 w-[100%] pl-2 bg-slate-100 outline-none"
        />
        <br />

        <input itemType="number"
          placeholder="+234: "
          className="w-[100%] h-[35px] pl-2 bg-slate-100 outline-none"
        />
        <br /> */}
      </div>
    </>
  );
};

export default EditProfile;
