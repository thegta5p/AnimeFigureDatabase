"use client";

import { useState } from "react";
import { Button, Link, Image } from "@nextui-org/react"

export const Footer = () => {

  return (
    <Link href="https://github.com/thegta5p/AnimeFigureDatabase">
      <Button color="primary">
        <Image width={25} src="/github-mark.svg"/>
        GitHub Repository
      </Button>
    </Link>
  );
};
