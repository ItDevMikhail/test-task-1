import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import EditClient from "./client-list/EditClient";
import { connect } from "react-redux";
import { fetchClients } from "redux/actions/Clients";

const Clients = (props) => {
  const { match, fetchClients } = props;

  useEffect(() => {
    fetchClients()
  }, [fetchClients]);

  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/client-list`} component={lazy(() => import(`./client-list/ClientList`))} />
        <Route path={`${match.url}/edit-client/:id`} component={EditClient} />
      </Switch>
    </Suspense>
  )
};

const mapDispatchToProps = {
  fetchClients
}



export default connect(null, mapDispatchToProps)(Clients);