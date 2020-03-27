this will be updated directly from https://github.com/d33pthought42/samizdat/blob/master/02_pistols/f17_d33p_ffmu/

# F17 FFMU
* Fock 17: Free Folk Measure Up
* d33pthought revision of FMDA/Ivan's G17

## changelog
* March 24, 2020: added content this readme in future improvements section & in overview re these vs. DD-release files. rm fosscad re feedback.
* Jan 29, 2020: moved verification from here to [new git repo](https://github.com/d33pthought42/samizdat). moved modification details to [separate file](f17_modifications.md). feedback: fosscad (f17 not included) -> d33pthought github
* earlier Jan 2020: fixed gunstreamer links. added non-embellished frames. minor signature verification guide revision.

## overview
This is a writeup for d33pthought's improvements to Free Men Don't Ask & Ivan's G17 model, which is patterned on the Glock G17 gen 3 frame.

### which files are which?
* please note that I will maintain updates in my own repo at [https://github.com/d33pthought42/samizdat](https://github.com/d33pthought42/samizdat) - if you want the most uptodate information on my revision to FMDA's g17 frame, please check here.
* my earlier updates were included in the [detterence dispensed release](https://github.com/d33pthought42/samizdat/tree/master/02_pistols/FMDA-G17-F17-Update) (kept in this repo for reference) where my revised files were mixed with some of FMDA's original releases (e.g. I only revised one screw-type design).

### elements of f17 revision work:
  * git:
    * this readme: resource overview, print parameters/info, testing/feedback info
    * improved model files:
      * [step](models/f17_d33p_ffmu.step) [stl](models/f17_d33p_ffmu.stl)
      * without embellishments: [step](models/f17_d33p_ffmu_no-embellish.step) [stl](models/f17_d33p_ffmu_no-embellish.stl)
    * jig model: [step](models/jig_f17_rails.step) [stl](models/jig_f17_rails.stl)
    * [modification details](f17_modifications.md)
    * [assembly guide](f17_assembly.md)
  * video assembly tutorial at gunstreamer:
    * [1: support removal 1](https://gunstreamer.com/v/1G7QBt?b=1)
    * [2: support removal 2](https://gunstreamer.com/v/px4hbc?b=1)
    * [3: drill holes](https://gunstreamer.com/v/TtgeFk?b=1)
    * [4: thread frame](https://gunstreamer.com/v/8u7zSC?b=1)
    * [5: rails](https://gunstreamer.com/v/rY4VNY?b=1)
    * [6: frame parts](https://gunstreamer.com/v/FANFyn?b=1)
    * [7: slide](https://gunstreamer.com/v/rY4VNY?b=1)
  * PGP/signature data/guides: moved to [new git repo](https://github.com/d33pthought42/samizdat)
  * trailer: [gunstreamer](https://gunstreamer.com/v/tWMFlL?b=1)

## acknowledgements
* Freemen Don't Ask & Ivan
* 304machining re contributions to rail design
* [FOSSCAD](https://fosscad.org/fc/) & [Deterrence Dispensed](https://keybase.io/team/det_disp) communities
* [Defense Distributed](https://defdist.org/)
* KS
* increasingly totalitarian countries for incentivizing gun-work, modeling, and printing

## materials
* 3d printer: Prusa MK3S
  * extruder nozzle: Ev3DM Tungsten Nozzle 1.75mm x 0.40mm
* calipers (for slicer filament measurement)
* printer filament: eSun PLA+ (including light blue, yellow, green, red)

## print settings
* slicing:
  * slicer: slic3r Prusa Edition v2.1.0
  * filament thickness as measured by caliper: ~1.70mm to 1.73 (depending on color/roll)
  * temp: 220 (225 & 230 also seem to work well)
  * resolution: 0.15mm (performed some at 0.10mm with some nicer detail but longer print time)
  * orientation: magwell up
    * with magwell down: significantly increases filament usage and print time, as well as surface (rather than interior) support artifacts
  * infill: 100%
  * supports:
    * z-contact: 0.20mm (0.15mm also works but it's more difficult to remove supports)
    * pattern: rectilinear (didn't see a huge difference vs. honeycomb when not using sheaths)
    * sheath: no (tried both ways, didn't seem to get a lot of help from sheath and it makes support removal much more difficult)

## testing in 2019
* mag-dump to failure
  * with mag dumping ~80 rounds at a time, failure achieved at ~120 rounds with deformation of the slide lock region
    * anterior slide lock wall with rearward deformation in shape of rear of recoil rod
    * slide lock itself sticking slightly into frame at superior posterior aspect due to milder deformation there
    * functionally resulted in failure to return to battery
    * slide and slide lock were extremely hot to the touch, likely exceeding PLA's transition temperature
* subsequent testing with ~33 round mag dumps without any appreciable problems - though did switch slides after dumps when slide became too hot to touch with bare hands
* would expect that various readily-available nylon-based filaments would not exhibit the failure noted above

## ongoing modifications thoughts

### the abstract
* when issues with fit and function - these might be classified into:
  * model problems (3d printing agnostic): e.g. pocket too large or small in model for known dimensions of part that goes into it
  * print problems: e.g. support interface artifact interfering with trigger reset via increased recoil spring friction
* while ostensibly many of mods in this revision address model issues, some modifications may be overly optimized for specific print setup/settings
* identifying such setup-specific optimizations will help make this model more generalizable for printing well in different print environments
* much of the power and appeal of 3d gun printing is in lowering of the skill/tools threshold for manufacturing compared to machining
* thus making it easier to take the model to a functional firearm can amplify this power and appeal

### concrete improvement areas
* trigger friction: the most important unresolved issue
  * friction between rear trigger housing assembly & rear rails, resulting in a functional but often gritty trigger
    * with straight trigger pull gun seems to "jump" slightly to right
    * rails that have a shorter outward extension from midline might resolve this by allowing rails to be moved slightly from midline without increasing slide friction too much. without shortening this dimension of the rails though, increased slide/rear-rail friction will likely result in malfunctions. for now the gritty trigger seems preferable to malfunctions.
* mag release spring tension
  * either I have some out-of-spec 33-round glock mags, or the tension of the mag release spring needs to be increased
  * I have had instances after hundreds of rounds of the mag dropping out unintentionally from a light touch (notably with extended mag release)
  * if my mag is in spec, this might be indicative of some wear in mag release spring region resulting in reduced tension
  * if tension needs increase, this is accomplished by raising the "neck" portion of the channel
* durability of screwhole region
  * after probably more than 1,000 rounds I see a tiny crack in the right rear screw-stop offset. while this is ostensibly not yet of any functional significance, it could be a prelude to it.
  * some users have reported failures of the rear screw region at very low round counts. I have not yet found the evidence compelling that it is a model over printer/protocol issue, in light of these not seeming to have followed the print protocol (e.g. wrong conical screws, seeming overtightening with bulging of frame top) and due to probable evidence of other print issues (e.g. slide lock spring not fitting).
  * even if the above issues are related to user error, it seems there is room to carefully increase material in this region without compromising function--e.g.:
    * slightly re-raising the frame top, but not to extent in original fmda (to leave clearance for reduced slide friction)
    * slightly increasing diameter of screw offsets, with consideration of connecting them
      * this will almost certaintly worsen the grip for some
    * while this may mask other problems with novices' prints, such material redundancy might nonetheless make it easier for novices to go from start to functional firearm as well as potentially increase longevity beyond what I have tested.
* fitment into holsters
  * holsters like bladetech use the shape of the trigger guard to yield a tactile "click"
  * no significant click with this version - either due to modifications to have trigger clear guard, or due to initial FMDA differences from stock g17
* aesthetics
  * trigger guard bump: when lower guard cut for increased trigger clearance introduced insightly bump that could be improved
  * trigger housing tiny-hole: on moving laterally trigger housing, introduced thin wall that seems invariably sliced as a small hole in backstrap region. I am extremely skeptical of any functional significance given many frames/rounds I've tested without any issue in this region.
  
### to diy-rail or not diy-rail
* I had the intention of abandoning this frame once p80-style rails were readily available, thinking this would come with the gst-9 frame
* unfortunately gst-9 suddenly announced they would not ship rail kits without the frame, and stated they had no intention in the near future of selling the rails individually again
* thus p80-style rails are effectively unavailable - I thus recommend against purchasing p80/gst9
* this leaves two pathways to resolve the trigger issue above:
  * figure out a way to get p80-style rear rails produced
  * modify the diy rear rails to reduce friction - with consideration of:
    * using thinner steel or aluminum rails
* for better or worse, the diy avenue is much harder for novices compared to just wrapping a p80-style rail system around the trigger housing
  * e.g. how can you infer from novices' pictures if their non-timing of the rails to the frame resulted in an offset that is resulting in cycling malfunctions? this is hard to see and help troubleshoot
  
## feedback
* please report if you have problems (or successes!), particularly if you have taken associated measurements of problem regions of your print re above modification goals
* details and clarity are appreciated in feedback - e.g. reporting "0% modifications necessary" when you had to spend an hour filing and dremeling hurts the cause
* feedback venues include:
  * keybase: [det_disp](https://keybase.io/team/det_disp) group
  * [github](https://github.com/d33pthought42)
