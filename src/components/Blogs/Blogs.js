import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the purpose of react router
          </Accordion.Header>
          <Accordion.Body>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. Let us create a simple application to React to
            understand how the React Router works. The application will contain
            three components: home component, about a component, and contact
            component. We will use React Router to navigate between these
            components. <br />
            BrowserRouter: BrowserRouter is a router implementation that uses
            the HTML5 history API(pushState, replaceState and the popstate
            event) to keep your UI in sync with the URL. It is the parent
            component that is used to store all of the other components. Routes:
            It’s a new component introduced in the v6 and a upgrade of the
            component. The main advantages of Routes over Switch are: Relative s
            and s Routes are chosen based on the best match instead of being
            traversed in order. Route: Route is the conditionally shown
            component that renders some UI when its path matches the current
            URL. Link: Link component is used to create links to different
            routes and implement navigation around the application. It works
            like HTML anchor tag.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does context api work</Accordion.Header>
          <Accordion.Body>
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is useref</Accordion.Header>
          <Accordion.Body>
            useRef returns a mutable ref object whose .current property is
            initialized to the passed argument (initialValue). The returned
            object will persist for the full lifetime of the component. <br />
            You might be familiar with refs primarily as a way to access the
            DOM. If you pass a ref object to React 
            React will set its .current property to the corresponding DOM node
            whenever that node changes. However, useRef() is useful for more
            than the ref attribute. It’s handy for keeping any mutable value
            around similar to how you’d use instance fields in classes.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
