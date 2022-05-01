import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"
import Photos from "./Photos";

export default function Dictionary (props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse (response){
setResults(response.data[0]);
}

function handlePexelsResponse (response) {
setPhotos(response.data.photos);
}

function search () {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f9170000100000102833658a4704800aa7c93e33e5642d0";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleSubmit (event) {
event.preventDefault();
search();

}

function handleKeywordChange (event) {
setKeyword(event.target.value);
}

function load () {
setLoaded(true);
search();
}


if (loaded) {
    return (
        <div className = "Dictionary">
        <section>
        <h1>What word are you looking for? </h1>
        <form onSubmit ={handleSubmit}>
        <input type ="search" onChange ={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className = "hint">
        suggested words: sunset, wine, yoga, travel, love
        </div>
        </section>
        <Results results = {results} />
        <Photos photos ={photos} />
        </div>
    );
} else {
load();
return "Loading...";
}

}