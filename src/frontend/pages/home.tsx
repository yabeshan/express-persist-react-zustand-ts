import React from "react";

import appStore from '../stores/appStore'

export default function Page() {
  const store = appStore()

  return <div>
    <h1>App :: Home page</h1>
  </div>;
}