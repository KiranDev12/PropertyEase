import React, { useEffect, useState } from "react";

import "./Agents.scss";
import apiRequest from "../../lib/apiRequest";

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await apiRequest.get("/users/agents"); // Using apiRequest module to make the GET request
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="agents-container">
      <h1>Our Agents</h1>
      <div className="agents-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img
              src={agent.avatar || "/default-avatar.png"}
              alt={`${agent.username}'s avatar`}
              className="agent-avatar"
            />
            <div className="agent-details">
              <h2>{agent.username}</h2>
              <p>{agent.email}</p>
              <p>Posts: {agent.postCount}</p>
              <p>Joined: {new Date(agent.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
