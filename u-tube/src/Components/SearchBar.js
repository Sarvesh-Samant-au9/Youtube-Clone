import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  inputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (eve) => {
    eve.preventDefault();
    console.log(this.props);
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="utubeVideo">
              Search Videos
              <input
                type="text"
                id="utubeVideo"
                value={this.state.term}
                onChange={this.inputChange}
                placeholder="Search Videos Here"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
