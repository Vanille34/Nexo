script 

body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#0f0f0f;
    color:white;
}

/* Header */
header{
    background:#1a1a1a;
    padding:15px;
    font-size:18px;
    border-bottom:2px solid #ff2d55;
}

/* Grille profils style Grindr */
.container{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:10px;
    padding:10px;
}

/* Carte profil */
.profile-card{
    background:#1c1c1c;
    border-radius:15px;
    padding:15px;
    text-align:center;
    position:relative;
    border:1px solid #ff2d55;
}

.avatar{
    font-size:40px;
}

.name{
    font-weight:bold;
    margin-top:5px;
}

.info{
    font-size:12px;
    color:#bbb;
}

/* Voyant en ligne */
.status{
    position:absolute;
    top:8px;
    right:8px;
    width:12px;
    height:12px;
    border-radius:50%;
}

/* Bannière pub */
.ad-banner{
    position:fixed;
    bottom:0;
    width:100%;
    background:#111;
    text-align:center;
    padding:10px;
    border-top:2px solid #ff2d55;
}

