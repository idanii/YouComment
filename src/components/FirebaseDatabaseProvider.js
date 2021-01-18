import { FirebaseDatabaseProvider } from "@react-firebase/database";
// Before
function App() {
  return (
    <div>
      This is my app <SomeOtherComponent />
    </div>
  );
}

// After
function App() {
  return (
    <FirebaseDatabaseProvider>
      <div>
        This is my app
        <SomeOtherComponent />
      </div>
    </FirebaseDatabaseProvider>
  );
}
