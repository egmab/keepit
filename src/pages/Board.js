import { connect } from "react-redux";
import { addItem } from "./actions";
import { removeItem } from "./actions";

const mapStateToProps = state => ({
  items : state.items
});

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (index) => dispatch(removeItem(index))
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      
     );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Board);
