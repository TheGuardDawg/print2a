# d33pthought's f17 modifications to FMDA/Ivan G17

### orientation terms
* z-axis: superior/inferior, top/bottom (top = where frame meets slide, even though printed magwell up)
* x-axis: anterior/posterior, front (muzzle) / back (tang)
* y-axis: left/right (with muzzle forward), mid/lateral

### magazine positioning & release
* **mag spring pocket & channel**
  * **depth** increased (model issue): model does not leave room for spring. this pocket channel re-created taking into account spring length. note spring bend degree requires greater height
    * mag spring length: 36.5mm
    * spring pocket depth on mag release: 2.35mm
    * pocket bottom to mag release shelf:
      * initial fmda/ivan: 28.5mm (protrusion: 8mm; too much protrusion regardless of bend)
      * changed to: `34.375` mm (protrusion: 2.125, d=+5.875)
  * **window** added to spring pocket to better visualize spring & assist in clearing residual support
  * **narrowed** pocket width to better retain spring
  * **fulcrum** point of channel reconfigured for optimizing tension & mag release travel
* **mag release shelf** (print issue): 3d print overhang artifact introduces significant friction in left/right movement of mag button. giving slightly extra clearance allows smooth movement without requiring filing, and without compromising function
* **mag stop** (model issue): in glocks & p80s there is a protrusion in left inner top magwell that prevents mags from being inserted too far with forceful insertion. this was added

### slide lock spring pocket
* **depth increase** (model issue): pocket in model not deep enough to allow spring (when under tension) to remain under front rail block (an issue given recoil rod going over this)
  * increased to `11` mm
  * related measurements: 14.5mm from pocket end to end of bend, rail mid/lower vertical thickness ~5.2mm, init fmda pocket depth ~6.4mm = protrusion of ~2.9mm, without taking into account pocket angle
* **width narrowed**: to `2.9` mm (from 3.20mm, note spring width ~2.39mm)
* **thickness increased**: to `1` mm in order to compensate for printer variance that may preclude spring insertion (from 0.839mm)
* **anterior/posterior clearance increase**: pocket in model too close to slide lock to allow spring to properly be depressed into recess for articulation with slide lock
  * distance from anterior inferior aspect of anterior slide lock wall to posterior aspect of pocket: 11.70mm (from 10.102mm)
* bevels removed - the only function they might serve is helping slide the spring into the pocket. a flatter surface seems easier to deal with re supports (in addition to design changes)

### slide & rail fitment
* **locking block post trimming** (model issue): in the path of the slide regardless of print settings
* **top frame clearance with slide** (model issue): the frame and slide need clearance. Without enough clearance you will get friction (interference with cycling) and may have difficulty aligning the slide with the rails
* **rear rail shelf clearance** (model issue): no clearance for shelf/rail - this was added (`0.2` mm)
* **rear rails: distance between slightly narrowed** (model issue):
  * changed to match front rail inter-distance
  * rear rails in initial model are slightly wider than front rails
    * front rail outer width: 23 mm
    * rear rail outer width: 23.25 mm
  * measurement check: inner rear frame width of 20.072mm (from 20.322mm)
  * rationale:
    * gives slide/rails slightly more L/R clearance
    * if set too wide will have to compensate by loosening rear rail screws (requires more expertise to fit the slide to rails properly and increases chance of screw walking)
  * downside: despite being closer to spec, reduces clearance between rear rails & trigger-assembly

### trigger housing L/R shift (model issue)
* moved left by `0.3` mm
* rationale:
  * reduce friction between R trigger assembly components, frame, and slide
    * connector/bar/cruciform against R frame & rail
    * top connector with slide
  * prevent/reduce-chance-of ejector slamming into right side of slide plate
* if move ***too far left*** potential issues:
  * top of connector may not have enough contact with slide resulting in a failure of reset and potentially chain fires
  * increased friction of cruciform with left rear slide rail
* crude quick index: insert mag with slide off - where does ejector align with mag vs. standard glock?
* measurement check via measuring inner trigger housing wall to outer/lateral frame (flat main faces):
  * initial: right=8.65 mm, left=7.15 mm
  * modified: right=8.95 mm, left=6.85 mm
    
### trigger & lower trigger guard clearance (3d print issue)
* glock specs leave very little lower trigger clearance
* 3d print overhang/support artifact is enough to contact trigger, with this friction potentially interfering with pull and reset
* cut into lower trigger guard to increase trigger clearance room

### pin hole modifications

#### trigger housing pin
* moved anteriorly to reflect hole placement on housing
  * within trigger housing pocket, center of housing pin `2.797` mm from front wall vs. FDMA 3.559 mm (d=0.762mm)
* while this doesn't seem perfectly aligned, the alignment is improved
* thanks to keybase user frankfarter for help with this dimension

#### trigger pin
* moved up/superiorly: `3.345` mm from locking block bed to pin center vs. 3.195 mm in FMDA (d=0.15mm)
* rationale: address problems getting pins in due to obscuration by locking block (vertical misalignment between locking block & frame)
  * current work around for FMDA model is to remove a small amount of the top part of the locking block hole to allow the pin in (which may be done unknowingly to just "get the pin to fit") - this can be done with a small steel flathead screwdriver with the locking block in the frame
* distance between locking block & trigger pin centers in top/bottom axis kept the same at `7` mm
* ant/post dimensions kept constant (2.4mm from center locking block to trigger pins, 78.291mm from anterior aspect of rear/top frame tab)

#### sizing
 sized the holes to:
  * 4mm (trigger)
  * 3mm (front rail block, locking block, trigger housing)
  * 2.3mm (rear rails)
  
* rationale - based on post processing method:
  * using drill bits (default assumption w sizes above)
    * rationale:
      * these sizes make it relatively easy to use a drill bit to clear out overhang material
      * too large size holes: may increase chance of introducing asymmetry (in addition to obviously increasing risk of loose pins if too far)
      * too small: having to remove too much material may increase chance of introducing angle to cylindrical pin channel. tried using half spheres with center orientation point and it was more difficult vs. just the open 3 & 4mm sizes
      * rear rail size works well with screws acting as tapping tools
  * using screw drivers to clear out overhang material (here only for reference)
    * increased all hole diameters, except rear rails, by 0.2mm
    * the extra diameter accommodates some for the overhang material
    * used this method for first few drafts. not very difficult (just take a small flathead and remove the visually obvious overhang material in the holes)
    * however, involves more troubleshooting re potentially removing more non-overhang material with associated risk of creating asymmetries or overly-large holes
    * incremental removal with pin fit testing required, which seems harder for noobs than just using a drill bit
    * this is obviously also inherently less accurate - if taking extra material into account re diameter then increased risk of misalignment