import { FloatingWhatsApp } from "./components/FloatingWhatsapp";

function App() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Foo"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </>
  );
}

export default App;
