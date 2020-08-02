import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvatar from "../../components/User/BannerAvatar";
import { getUserApi } from "../../api/user";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) toast.error("User does not exist.");
      })
      .catch(() => {
        toast.error("User does not exist.");
      });
  }, [params]);

  return (
    <BasicLayout calssName="user">
      <div className="user__title">
        <h2>
          {user ? `${user.name} ${user.lastName}` : "User does not exist."}
        </h2>
      </div>
      <BannerAvatar user={user} />
      <div>User Info</div>
      <div className="user__messages">User messages</div>
    </BasicLayout>
  );
}

export default withRouter(User);
