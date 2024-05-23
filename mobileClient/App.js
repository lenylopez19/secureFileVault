//CORE
import 'react-native-reanimated'
//NAVIGATION
import MainAppNav from './navigation/MainAppNav';
//CONTEXT
import { AuthProvider } from './context/AuthContext';
import { FilesProvider } from './context/FilesContext';

export default function App() {
  return (
    <AuthProvider>
      <FilesProvider>
        <MainAppNav />
      </FilesProvider>
    </AuthProvider>
  );
}



