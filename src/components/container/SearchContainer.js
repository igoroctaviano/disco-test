import React, { Component } from "react";

/* Utilities */
import { searchArtists, artistAlbums } from "../../config/DiscogsClient.js";

/* Components */
import SuggestiveInput from "../presentational/SuggestiveInput.js";
import DynamicList from "../presentational/DynamicList.js";
import Modal from "../presentational/Modal.js";

export default class SearchContainer extends Component {
  state = {
    query: "",
    artists: [],
    albums: [],
    artist: null,
    album: null,
    page: 1,
    isLoading: false,
    isLoadable: true,
    isModalOpened: false
  };

  loadArtists = () => {
    this.setState({ isLoading: true }, () => {
      searchArtists(this.state.query)
        .then(({ results }) => this.setState({ artists: results, isLoading: false }))
        .catch(({ status, error: { message } }) => {
          if (status === 404) this.setState({ isLoading: false });
          else console.log(`Error: ${message}`);
        });
    });
  };

  loadArtistAlbums = () => {
    const { page, artist: { id }, albums } = this.state;

    this.setState({ isLoading: true }, () => {
      artistAlbums(id, page)
        .then(({ releases }) => {
          this.setState({
            albums: albums.concat(releases),
            isLoading: false,
            isLoadable: true,
            page: page + 1
          });
        })
        .catch(({ status, error: { message } }) => {
          if (status === 404) {
            this.setState({ isLoadable: false, isLoading: false });
          } else console.log(`Error: ${message}`);
        });
    });
  };

  updateQuery = event => {
    this.setState({ query: event.target.value }, () => {
      const { query } = this.state;
      if (query && query.length > 0) {
        if (query.length < 5) {
          this.loadArtists();
        } else {
          this.loadArtists();
        }
      } else {
        this.setState({ artists: [], albums: [] });
      }
    });
  };

  selectArtist = artist => {
    this.setState({
      query: artist.title,
      artist: artist,
      artists: [],
      albums: [] }, this.loadArtistAlbums);
  };

  openAlbumDetails = album => this.setState({ album: album, isModalOpened: true });

  closeAlbumDetails = () => this.setState({ isModalOpened: false });

  renderAlbumDetails = () => {
    const {
      album: { artist, title, year, thumb }
    } = this.state;

    return (
      <div className="album-modal">
        <img src={thumb} alt="Album Image" />
        <div className="content">
          <div className="header">
            <p>{artist.toUpperCase()}</p>
            <h2>{title}</h2>
            <p>{year}</p>
          </div>
          <p>Description.</p>
        </div>
      </div>
    );
  };

  renderAlbumItem = album => (
    <li
      className="album-item"
      key={album.id}
      onClick={() => this.openAlbumDetails(album)}
    >
      <div className="wrap">
        <img src={album.thumb} alt="Album Image" />
        <h3>{album.title}</h3>
      </div>
      <p>{album.year}</p>
    </li>
  );

  renderArtist = artist => {
    return (
      <li key={artist.id} onClick={() => this.selectArtist(artist)}>
        {artist.title}
      </li>
    );
  };

  render() {
    const {
      artists,
      albums,
      isLoading,
      query,
      isLoadable,
      isModalOpened
    } = this.state;

    return (
      <div className="search-container">
        <div className="wrapper">
          <Modal
            isActive={isModalOpened}
            itemRenderer={this.renderAlbumDetails}
            onClose={this.closeAlbumDetails}
          />
          <SuggestiveInput
            onChange={this.updateQuery}
            value={query}
            items={artists}
            itemRenderer={this.renderArtist}
          />
          <DynamicList
            onClick={this.openAlbumDetails}
            onLoad={this.loadArtistAlbums}
            items={albums}
            itemRenderer={this.renderAlbumItem}
            buttonText="LOAD MORE"
            isLoading={isLoading}
            isButtonActive={isLoadable}
          />
        </div>
      </div>
    );
  }
}
