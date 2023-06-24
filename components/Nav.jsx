"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const SetProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    SetProviders();
  }, []);

  const isLogged = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
          alt="Prompts4Their"
        />
        <p className="logo_text">Prompts4Their</p>
      </Link>

      {/* Desktop */}
      <div className="sm:flex hidden">
        {isLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create post
            </Link>

            <button type="button" className="outline_btn" onClick={signOut}>
              Sing Out
            </button>

            <Link href="/profile">
              <Image
                src="assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sing In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile */}
      {isLogged ? (
        <div className="sm:hidden flex relative">
          <Image
            src="assets/images/logo.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropDown((prev) => !prev)}
          />

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link self-center"
                onClick={() => setToggleDropDown(false)}
              >
                My profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link self-center"
                onClick={() => setToggleDropDown(false)}
              >
                Create post
              </Link>
              <button
                type="button"
                className="black_btn mt-5 w-full"
                onClick={() => {
                  setToggleDropDown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                className="black_btn"
                onClick={() => signIn(provider.id)}
              >
                Sing In
              </button>
            ))}
        </>
      )}
    </nav>
  );
};

export default Nav;
