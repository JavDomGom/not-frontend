import React from "react";
import { Location, WebSite, DateOfBirth } from "../../../utils/icons";

import "./InfoUser.scss";

export default function InfoUser(props) {
  const { user } = props;

  return (
    <div className="info-user">
      <h2 className="name">
        {user?.name} {user?.lastName}
      </h2>
      <p className="email">{user?.email}</p>
      {user?.biography && <div className="description">{user?.biography}</div>}
      <div className="">
        {user?.location && (
          <p>
            <Location />
            {user?.biography}
          </p>
        )}
      </div>
    </div>
  );
}
