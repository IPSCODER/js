// what is dom:
// Document Object Model is a programming interface for web documents. It respresents the structure of document as a tree object
// where each object corresponds to a part of the document,such as element,attribute, and text


// redux
// store,action,reducer

// Explain the error boundaries?

// Error boundaries help you to catch javascript error anywhere in the child components. They are most used to log the error and show a fallback ui

//  What are the core principles of Redux?
// Redux follows three fundamental principles:
// i. Single source of truth: The state of your whole application is stored in an object
// tree within a single store. The single state tree makes it easier to keep track of
// changes over time and debug or inspect the application.
// ii. State is read-only: The only way to change the state is to emit an action, an
// object describing what happened. This ensures that neither the views nor the
// network callbacks will ever write directly to the state.
// iii. Changes are made with pure functions: To specify how the state tree is
// transformed by actions, you write reducers. Reducers are just pure functions that
// take the previous state and an action as parameters, and return the next state.
