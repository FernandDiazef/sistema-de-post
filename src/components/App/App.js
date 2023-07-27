import { CreatePost } from '../CreatePost/Create';
import { CustomNavBar } from '../CustomNavBar/CustomNavBar';
import './App.css';
import { PaginationTable } from '../PaginationTable/Pagination';

function App() {



  return (
    <div className="App">
      <CustomNavBar />
      <CreatePost />
      <PaginationTable />
    </div>
  );
}

export default App;