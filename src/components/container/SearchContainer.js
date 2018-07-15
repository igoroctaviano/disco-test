import React, { Component } from "react";
import { searchArtists, artistAlbums } from "../../config/DiscogsClient.js";
import { debounce, throttle } from "../../utils/utilities.js";
import {
  SuggestiveInput,
  DynamicList,
  AlbumDetails,
  ArtistItem,
  AlbumItem,
  Modal
} from "../presentational/index.js";

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

  loadArtistsDebounced = debounce(this.loadArtists, 500);
  loadArtistsThrottle = throttle(this.loadArtists, 500);

  updateQuery = event => {
    this.setState({ query: event.target.value }, () => {
      const { query } = this.state;
      if (query && query.length > 0) {
        if (query.length < 5 || query.endsWith(" ")) {
          this.loadArtistsThrottle();
        } else {
          this.loadArtistsDebounced();
        }
      } else {
        this.setState({ artists: [], albums: [] });
      }
    });
  };

  selectArtist = artist => {
    this.setState({
      query: artist.title,
      artist,
      artists: [],
      albums: [] }, this.loadArtistAlbums);
  };

  openAlbumDetails = album => this.setState({ album: album, isModalOpened: true });

  closeAlbumDetails = () => this.setState({ isModalOpened: false });

  renderAlbumDetails = () => <AlbumDetails {...this.state.album} />;

  renderAlbumItem = album => (
    <AlbumItem key={album.id} album {...album} onClick={() => this.openAlbumDetails(album)} />
  );

  renderArtist = artist => (
    <ArtistItem key={artist.id} artist {...artist} onClick={() => this.selectArtist(artist)} />
  );

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
