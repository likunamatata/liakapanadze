import React from "react";
import { Route } from "react-router-dom";

// import Welcome from "./Welcome";

function Decks() {
  return (
    <div className="user-screens">
      {/* <Route
        exact
        path="/"
        render={() => (
          <Feed
            currentUser={props.currentUser}
            history={props.history}
            submitted={props.submitted}
            deleted={props.deleted}
            updateSubmittedState={props.updateSubmittedState}
            updateDeletedState={props.updateDeletedState}
          />
        )}
      /> */}

      {/* <Route exact path="/welcome" render={() => <Welcome />} /> */}
      {/* <Route
        exact
        path="/write"
        render={() => (
          <Write
            currentUser={props.currentUser}
            history={props.history}
            updateSubmittedState={props.updateSubmittedState}
          />
        )}
      /> */}
      
    </div>
  );
}

export default Decks;