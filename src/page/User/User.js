import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvatar from "../../components/User/BannerAvatar";
import InfoUser from "../../components/User/InfoUser";
import ListMessages from "../../components/ListMessages";
import { getUserApi } from "../../api/user";
import { getUserMessagesApi } from "../../api/message";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState(null);
  const { params } = match;
  const loggedUser = useAuth();

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

  useEffect(() => {
    getUserMessagesApi(params.id, 1)
      .then((response) => {
        setMessages(response);
      })
      .catch(() => {
        setMessages([]);
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.name} ${user.lastName}` : "User does not exist."}
        </h2>
      </div>
      <BannerAvatar user={user} loggedUser={loggedUser} />
      <InfoUser user={user} />
      <div className="user__messages">
        <h3>Messages</h3>
        {messages && <ListMessages messages={messages} />}
      </div>
    </BasicLayout>
  );
}

export default withRouter(User);
