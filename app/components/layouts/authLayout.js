"use client";
import React from "react";
import logo from "@assets/images/viloxLogo.png"
import Image from "next/image";
import authImg from "@assets/images/aythImage.png"
import { Session } from "@/app/hooks/Auth";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function AuthLayout({ title, children, onSubmit, errMsg }) {
  const user = useSelector((state) => state.User);
  const isAuthenticated = Session(user);
  const router = useRouter();
  const serialize = (form) => {
    var result = [];
    if (typeof form === "object" && form.nodeName === "FORM")
      Array.prototype.slice.call(form.elements).forEach(function (control) {
        if (
          control.name &&
          !control.disabled &&
          ["file", "reset", "submit", "button"].indexOf(control.type) === -1
        )
          if (control.type === "select-multiple")
            Array.prototype.slice
              .call(control.options)
              .forEach(function (option) {
                if (option.selected)
                  result.push(control.name + "=" + option.value);
              });
          else if (
            ["checkbox", "radio"].indexOf(control.type) === -1 ||
            control.checked
          )
            result.push(control.name + "=" + control.value);
      });
    var data = result.join("&").replace(/%20/g, "+");

    const serializeToJSON = (str) =>
      str
        .split("&")
        .map((x) => x.split("="))
        .reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: isNaN(value) ? value : Number(value),
          }),
          {}
        );

    return serializeToJSON(data);
  };




  if (isAuthenticated.status === "authenticated") {
    router.push("/");
  } else {
    return (
      <div className="min-h-screen grid md:grid-cols-2">
        <div className='max-w-sm mx-auto'>
          <div className="bg-white min-h-screen p-4 flex flex-col">
            <div>
              <Image src={logo} className="w-20 mx-auto" alt="LOGO" />
            </div>
            <div className="flex-grow flex flex-col space-y-4 w-full justify-center">
              <div className="space-y-1">
                <div className="text-3xl">{title}</div>
                <div className="text-sm text-gray-400">
                  Log in to access the control center of your platform. Manage, monitor, and make data-driven decisions with ease.
                </div>
              </div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault(), onSubmit(serialize(e.target));
                  }} >
                  <div className="space-y-4">
                    <div className="text-danger text-sm">{errMsg}</div>
                    <div className="space-y-5">{children}</div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="text-center mt-12 text-xs select-none pointer-events-none">Powered by Mbwoy</div> */}
          </div>
        </div>
        <div className='relative top-0'>
          <div className="h-screen w-full fixed text-4xl md:grid md:grid-cols-2 bottom-0 hidden p-6 pr-20">
            <div className='bg-black h-full w-full rounded-3xl'></div>
          </div>
        </div>
      </div>
    );
  }

}

export default AuthLayout;
