
let flag = true
const itsupp = "./songs/01 It_s Up.mp3"
const bgr = "./songs/02 Blue Green Red.mp3"
const housekeeping = "./songs/03 Housekeeping Knows (feat. Latto).mp3"

const sideways = "./songs/Gordo & Drake - Sideways [Ultra Records].mp3"
const healing = "./songs/Gordo & Drake - Healing [Ultra Records].mp3"

const hu = "./songs/08 HOT UPTOWN (feat. Drake).mp3"
const ugly = "./songs/09 Uuugly.mp3"

const fm = "./songs/01 Family Matters.mp3"
const pushups = "./songs/Push Ups.mp3"
const actii = "./songs/4Batz - act ii- date @ 8 (remix) feat. Drake.mp3"

const redbutton = "./songs/2-01 Red Button.mp3"
const samb = "./songs/2-02 Stories About My Brother.mp3"
const tsf = "./songs/2-03 The Shoe Fits.mp3"
const wm = "./songs/2-04 Wick Man.mp3"
const ew = "./songs/2-05 Evil Ways (feat. J. Cole).mp3"
const ybmh = "./songs/2-06 You Broke My Heart.mp3"


const vb = "./songs/01 Virginia Beach.mp3"
const amen = "./songs/02 Amen (feat. Teezo Touchdown).mp3"
const cfy = "./songs/03 Calling For You (feat. 21 Savage).mp3"
const foh = "./songs/04 Fear Of Heights.mp3"
const daylight = "./songs/05 Daylight.mp3"
const fps = "./songs/06 First Person Shooter (feat. J. Co.mp3"
const idgaf = "./songs/07 IDGAF (feat. Yeat).mp3"
const santa = "./songs/08 7969 Santa.mp3"
const syo = "./songs/09 Slime You Out (feat. SZA).mp3"
const bp = "./songs/10 Bahamas Promises.mp3"
const tob = "./songs/11 Tried Our Best.mp3"
const stw = "./songs/12 Screw The World (Interlude).mp3"
const dap = "./songs/13 Drew A Picasso.mp3"
const mo = "./songs/14 Members Only (feat. PARTYNEXTDOOR.mp3"
const wwpd = "./songs/15 What Would Pluto Do.mp3"
const atp = "./songs/16 All The Parties (feat. Chief Keef.mp3"
const eightAC = "./songs/17 8am in Charlotte.mp3"
const bbl = "./songs/18 BBL Love (Interlude).mp3"
const gently = "./songs/19 Gently (feat. Bad Bunny).mp3"
const rbd = "./songs/20 Rich Baby Daddy (feat. Sexyy Red.mp3"
const aln = "./songs/21 Another Late Night (feat. Lil Yac.mp3"
const afh = "./songs/22 Away From Home.mp3"
const po = "./songs/23 Polar Opposites.mp3"

const meltdown = "./songs/07 MELTDOWN.mp3"
const otr = "./songs/Drake-Central-Cee-On-The-Radar-24Naijamuzic-com.mp3"
const wty = "./songs/01 Who Told You (feat. Drake).mp3"
const sar = "./songs/Drake - Search & Rescue (Official Visualizer).mp3"
const wcd = "./songs/Popcaan - We Caa Done Ft Drake (Official Video).mp3"
const rf = "./songs/01 Rich Flex.mp3"
const md = "./songs/02 Major Distribution.mp3"
const onbs = "./songs/03 On BS.mp3"
const bob = "./songs/04 BackOutsideBoyz.mp3"
const pr = "./songs/05 Privileged Rappers.mp3"
const say = "./songs/06 Spin Bout U.mp3"
const his = "./songs/07 Hours In Silence.mp3"
const tt = "./songs/08 Treacherous Twins.mp3"
const cl = "./songs/09 Circo Loco.mp3"
const pandm = "./songs/10 Pussy & Millions (feat. Travis Sc.mp3"
const bb = "./songs/11 Broke Boys.mp3"
const mos = "./songs/12 Middle of the Ocean.mp3"
const jsp = "./songs/13 Jumbotron Shit Poppin.mp3"
const mm = "./songs/14 More M_s.mp3"
const glenwood = "./songs/15 3AM on Glenwood.mp3"
const igifm = "./songs/16 I Guess It_s Fuck Me.mp3"
const sa = "./songs/DJ Khaled ft. Drake & Lil Baby - STAYING ALIVE (Official Video).mp3"

const intro = "./songs/01 Intro.mp3"
const fb = "./songs/02 Falling Back.mp3"
const tgg = "./songs/03 Texts Go Green.mp3"
const crr = "./songs/04 Currents.mp3"
const akp = "./songs/05 A Keeper.mp3"
const cmn = "./songs/06 Calling My Name.mp3"
const sticky = "./songs/07 Sticky.mp3"
const mass = "./songs/08 Massive.mp3"
const fbd = "./songs/09 Flight's Booked.mp3"
const overdrive = "./songs/10 Overdrive.mp3"
const dh = "./songs/11 Down Hill.mp3"
const ttb = "./songs/12 Tie That Binds.mp3"
const liab = "./songs/13 Liability.mp3"
const jc = "./songs/14 Jimmy Cooks (feat. 21 Savage).mp3"



const dp = "./songs/01 Deep Pockets.mp3"
const wtsw = "./songs/02 When To Say When.mp3"
const cf = "./songs/03 Chicago Freestyle.mp3"
const nyt = "./songs/04 Not You Too (feat. Chris Brown).mp3"
const ts = "./songs/05 Toosie Slide.mp3"
const desires = "./songs/06 Desires (feat. Future).mp3"
const tf = "./songs/07 Time Flies.mp3"
const landed = "./songs/08 Landed.mp3"
const D4L = "./songs/09 D4L.mp3"
const pain = "./songs/10 Pain 1993 (feat. Playboi Carti).mp3"
const loss = "./songs/11 Losses.mp3"
const ffwl = "./songs/12 From Florida With Love.mp3"
const demons = "./songs/13 Demons (feat. Fivio Foreign & Sos.mp3"
const war = "./songs/14 War.mp3"








const np = document.getElementById("now-playing")

//// we will be only creating the audio objectr when there will be a need to play that music

function playMusic(src, elementId)
{
    if (prev) {
        prev.pause();
        prev.currentTime = 0;
    }
    currentAudio = new Audio(src); // Create the Audio object only when needed
    currentAudio.play();
    np.textContent = `Now Playing....${document.getElementById(elementId).textContent}`;
    np.style.color = "white";
    prev = currentAudio;
}

let prev = null







document.getElementById("itsup").addEventListener("click", ()=> {
        playMusic(itsupp,"itsup")
})



document.getElementById("bgr").addEventListener("click", ()=> {
        playMusic(bgr,"bgr")
})


document.getElementById("housekeeping").addEventListener("click", ()=> {
        playMusic(housekeeping, "housekeeping")
})


document.getElementById("sideways").addEventListener("click", ()=> {
    playMusic(sideways, "sideways")
})


document.getElementById("healing").addEventListener("click", ()=> {
    playMusic(healing, "healing")
})


document.getElementById("hu").addEventListener("click", ()=> {
    
    playMusic(hu,"hu")
})
document.getElementById("ugly").addEventListener("click", ()=> {
    
    playMusic(ugly,"ugly")
})


document.getElementById("fm").addEventListener("click", ()=> {
    
        playMusic(fm,"fm")
})

document.getElementById("pushups").addEventListener("click", ()=> {
    
    playMusic(pushups,"pushups")
})
document.getElementById("actii").addEventListener("click", ()=> {
    
    playMusic(actii,"actii")
})


document.getElementById("redbutton").addEventListener("click", ()=> {
    
    playMusic(redbutton,"redbutton")
})

document.getElementById("samb").addEventListener("click", ()=> {
    
    playMusic(samb,"samb")
})

document.getElementById("tsf").addEventListener("click", ()=> {
    
    playMusic(tsf,"tsf")
})

document.getElementById("wm").addEventListener("click", ()=> {
    
    playMusic(wm,"wm")
})

document.getElementById("ew").addEventListener("click", ()=> {
    
    playMusic(ew,"ew")
})

document.getElementById("ybmh").addEventListener("click", ()=> {
    
    playMusic(ybmh,"ybmh")
})


document.getElementById("vb").addEventListener("click", ()=> {
        playMusic(vb,"vb")
})


document.getElementById("amen").addEventListener("click", ()=> {
        playMusic(amen,"amen")
})


document.getElementById("cfy").addEventListener("click", ()=> {
        playMusic(cfy,"cfy")
})

document.getElementById("foh").addEventListener("click", ()=> {
        playMusic(foh,"foh")
})



document.getElementById("daylight").addEventListener("click", ()=> {
        playMusic(daylight, "daylight")
})


document.getElementById("fps").addEventListener("click", ()=> {
        playMusic(fps, "fps")
})

document.getElementById("idgaf").addEventListener("click", ()=> {
        playMusic(idgaf,"idgaf")
})

document.getElementById("santa").addEventListener("click", ()=> {
        playMusic(santa,"santa")
})


document.getElementById("syo").addEventListener("click", ()=> {
        playMusic(syo,"syo")
})


document.getElementById("bp").addEventListener("click", ()=> {
        playMusic(bp,"bp")
})



document.getElementById("tob").addEventListener("click", ()=> {
        playMusic(tob,"tob")
})

document.getElementById("stw").addEventListener("click", ()=> {
        playMusic(stw, "stw")
})


document.getElementById("dap").addEventListener("click", ()=> {
        playMusic(dap,"dap")
})


document.getElementById("mo").addEventListener("click", ()=> {
        playMusic(mo,"mo")
})


document.getElementById("wwpd").addEventListener("click", ()=> {
        playMusic(wwpd,"wwpd")
})


document.getElementById("atp").addEventListener("click", ()=> {
        playMusic(atp,"atp")
})


document.getElementById("eightAC").addEventListener("click", ()=> {
        playMusic(eightAC,"eightAC")
})


document.getElementById("bbl").addEventListener("click", ()=> {
        playMusic(bbl,"bbl")
})



document.getElementById("gently").addEventListener("click", ()=> {
        playMusic(gently,"gently")
})



document.getElementById("rbd").addEventListener("click", ()=> {
        playMusic(rbd,"rbd")
})



document.getElementById("aln").addEventListener("click", ()=> {
        playMusic(aln,"aln")
})

document.getElementById("afh").addEventListener("click", ()=> {
        playMusic(afh,"afh")
})



document.getElementById("po").addEventListener("click", ()=> {
        playMusic(po,"po")
})

document.getElementById("meltdown").addEventListener("click", ()=> {
    playMusic(meltdown,"meltdown")
})

document.getElementById("otr").addEventListener("click", ()=> {
    playMusic(otr,"otr")
})


document.getElementById("wty").addEventListener("click", ()=> {
    playMusic(wty,"wty")
})


document.getElementById("sar").addEventListener("click", ()=> {
    playMusic(sar,"sar")
})


document.getElementById("wcd").addEventListener("click", ()=> {
    playMusic(wcd,"wcd")
})

document.getElementById("rf").addEventListener("click", ()=> {
    playMusic(rf,"rf")
})

document.getElementById("md").addEventListener("click", ()=> {
    playMusic(md,"md")
})

document.getElementById("onbs").addEventListener("click", ()=> {
    playMusic(onbs,"onbs")
})
document.getElementById("bob").addEventListener("click", ()=> {
    playMusic(bob,"bob")
})


document.getElementById("pr").addEventListener("click", ()=> {
    playMusic(pr,"pr")
})


document.getElementById("say").addEventListener("click", ()=> {
    playMusic(say,"say")
})

document.getElementById("his").addEventListener("click", ()=> {
    playMusic(his,"his")
})


document.getElementById("tt").addEventListener("click", ()=> {
    playMusic(tt,"tt")
})

document.getElementById("cl").addEventListener("click", ()=> {
    playMusic(cl,"cl")
})

document.getElementById("pandm").addEventListener("click", ()=> {
    playMusic(pandm,"pandm")
})

document.getElementById("bb").addEventListener("click", ()=> {
    playMusic(bb,"bb")
})

document.getElementById("mos").addEventListener("click", ()=> {
    playMusic(mos,"mos")
})

document.getElementById("jsp").addEventListener("click", ()=> {
    playMusic(jsp,"jsp")
})

document.getElementById("mm").addEventListener("click", ()=> {
    playMusic(mm,"mm")
})

document.getElementById("glenwood").addEventListener("click", ()=> {
    playMusic(glenwood,"glenwood")
})

document.getElementById("igifm").addEventListener("click", ()=> {
    playMusic(igifm,"igifm")
})

document.getElementById("sa").addEventListener("click", ()=> {
    playMusic(sa,"sa")
})


document.getElementById("intro").addEventListener("click", ()=> {
    playMusic(intro,"intro")
})
document.getElementById("fb").addEventListener("click", ()=> {
    playMusic(fb,"fb")
})
document.getElementById("tgg").addEventListener("click", ()=> {
    playMusic(tgg,"tgg")
})
document.getElementById("crr").addEventListener("click", ()=> {
    playMusic(crr,"crr")
})
document.getElementById("akp").addEventListener("click", ()=> {
    playMusic(akp,"akp")
})
document.getElementById("cmn").addEventListener("click", ()=> {
    playMusic(cmn,"cmn")
})
document.getElementById("sticky").addEventListener("click", ()=> {
    playMusic(sticky,"sticky")
})
document.getElementById("mass").addEventListener("click", ()=> {
    playMusic(mass,"mass")
})
document.getElementById("fbd").addEventListener("click", ()=> {
    playMusic(fbd,"fbd")
})
document.getElementById("overdrive").addEventListener("click", ()=> {
    playMusic(overdrive,"overdrive")
})
document.getElementById("dh").addEventListener("click", ()=> {
    playMusic(dh,"dh")
})
document.getElementById("ttb").addEventListener("click", ()=> {
    playMusic(ttb,"ttb")
})
document.getElementById("liab").addEventListener("click", ()=> {
    playMusic(liab,"liab")
})
document.getElementById("jc").addEventListener("click", ()=> {
    playMusic(jc,"jc")
})



document.getElementById("dp").addEventListener("click", ()=> {
    playMusic(dp,"dp")
})

document.getElementById("wtsw").addEventListener("click", ()=> {
    playMusic(wtsw,"wtsw")
})

document.getElementById("cf").addEventListener("click", ()=> {
    playMusic(cf,"cf")
})

document.getElementById("nyt").addEventListener("click", ()=> {
    playMusic(nyt,"nyt")
})

document.getElementById("ts").addEventListener("click", ()=> {
    playMusic(ts,"ts")
})

document.getElementById("desires").addEventListener("click", ()=> {
    playMusic(desires,"desires")
})

document.getElementById("tf").addEventListener("click", ()=> {
    playMusic(tf,"tf")
})

document.getElementById("landed").addEventListener("click", ()=> {
    playMusic(landed,"landed")
})

document.getElementById("D4L").addEventListener("click", ()=> {
    playMusic(D4L,"D4L")
})

document.getElementById("pain").addEventListener("click", ()=> {
    playMusic(pain,"pain")
})

document.getElementById("loss").addEventListener("click", ()=> {
    playMusic(loss,"loss")
})

document.getElementById("ffwl").addEventListener("click", ()=> {
    playMusic(ffwl,"ffwl")
})


document.getElementById("demons").addEventListener("click", ()=> {
    playMusic(demons,"demons")
})

document.getElementById("war").addEventListener("click", ()=> {
    playMusic(war,"war")
})





