"use client";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export const WelcomeMessage = () => {
  

  return (
    <div>
      <Card>
        <CardHeader>Welcome to the Anime Figure Database!!!</CardHeader>
        <Divider />
        <CardBody>
          <p>
            This is a database of figures or figurines from various Japanese anime, manga, and video games. You can search figures by name, series, or character. You can add figures to your collection to keep track of what you own. Below are some shops where you can buy figures from.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
