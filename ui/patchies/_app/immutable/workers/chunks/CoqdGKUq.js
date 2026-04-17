import{m as $,n as L,o as X}from"../renderWorker-WghzlIFB.js";import Y from"./ByEAOjzQ.js";const T={_luminance:{type:"util",glsl:`float _luminance(vec3 rgb){
      const vec3 W = vec3(0.2125, 0.7154, 0.0721);
      return dot(rgb, W);
    }`},_noise:{type:"util",glsl:`
    //	Simplex 3D Noise
    //	by Ian McEwan, Ashima Arts
    vec4 _permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 _taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float _noise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //  x0 = x0 - 0. + 0.0 * C
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
    i = mod(i, 289.0 );
    vec4 p = _permute( _permute( _permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
    vec4 norm = _taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

  // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }
    `},_rgbToHsv:{type:"util",glsl:`vec3 _rgbToHsv(vec3 c){
            vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
            vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
            vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

            float d = q.x - min(q.w, q.y);
            float e = 1.0e-10;
            return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
        }`},_hsvToRgb:{type:"util",glsl:`vec3 _hsvToRgb(vec3 c){
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }`},_rotate:{type:"util",glsl:`vec2 _rotate(vec2 uv, vec2 cp, float a, bool side) {
    float angle = a * 3.141592;
    vec2 n = vec2(sin(angle), cos(angle));
    float d = dot(uv - cp, n);
    if (side) {
      uv -= n * max(0.0, d) * 2.0;
    } else {
        uv -= n * min(0.0, d) * 2.0;
    }
    return uv;
}`}};class _{environment;src;dynamic;tex;constructor(e){this.environment=e,this.src=void 0,this.dynamic=!0,this.tex=e.regl.texture({shape:[1,1]})}init=e=>{e.src&&(this.src=e.src,this.tex=this.environment.regl.texture(this.src)),e.dynamic&&(this.dynamic=e.dynamic)};initCam=()=>{};initVideo=()=>{};initImage=()=>{};initScreen=()=>{};clear=()=>{this.src&&"srcObject"in this.src&&this.src.srcObject&&"getTracks"in this.src.srcObject&&this.src.srcObject.getTracks&&this.src.srcObject.getTracks().forEach(e=>e.stop()),this.src=void 0,this.tex=this.environment.regl.texture({shape:[1,1]})};tick=()=>{this.src&&this.dynamic&&("videoWidth"in this.src&&this.src.videoWidth&&this.src.videoWidth!==this.tex.width&&this.tex.resize(this.src.videoWidth,this.src.videoHeight),"width"in this.src&&this.src.width&&this.src.width!==this.tex.width&&this.tex.resize(this.src.width,this.src.height),this.tex.subimage(this.src))};getTexture=()=>this.tex}const S=[{name:"noise",type:"src",inputs:[{type:"float",name:"scale",default:10},{type:"float",name:"offset",default:.1}],glsl:"   return vec4(vec3(_noise(vec3(_st*scale, offset*time))), 1.0);"},{name:"voronoi",type:"src",inputs:[{type:"float",name:"scale",default:5},{type:"float",name:"speed",default:.3},{type:"float",name:"blending",default:.3}],glsl:`   vec3 color = vec3(.0);
   // Scale
   _st *= scale;
   // Tile the space
   vec2 i_st = floor(_st);
   vec2 f_st = fract(_st);
   float m_dist = 10.;  // minimun distance
   vec2 m_point;        // minimum point
   for (int j=-1; j<=1; j++ ) {
   for (int i=-1; i<=1; i++ ) {
   vec2 neighbor = vec2(float(i),float(j));
   vec2 p = i_st + neighbor;
   vec2 point = fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
   point = 0.5 + 0.5*sin(time*speed + 6.2831*point);
   vec2 diff = neighbor + point - f_st;
   float dist = length(diff);
   if( dist < m_dist ) {
   m_dist = dist;
   m_point = point;
   }
   }
   }
   // Assign a color using the closest point position
   color += dot(m_point,vec2(.3,.6));
   color *= 1.0 - blending*m_dist;
   return vec4(color, 1.0);`},{name:"osc",type:"src",inputs:[{type:"float",name:"frequency",default:60},{type:"float",name:"sync",default:.1},{type:"float",name:"offset",default:0}],glsl:`   vec2 st = _st;
   float r = sin((st.x-offset/frequency+time*sync)*frequency)*0.5  + 0.5;
   float g = sin((st.x+time*sync)*frequency)*0.5 + 0.5;
   float b = sin((st.x+offset/frequency+time*sync)*frequency)*0.5  + 0.5;
   return vec4(r, g, b, 1.0);`},{name:"shape",type:"src",inputs:[{type:"float",name:"sides",default:3},{type:"float",name:"radius",default:.3},{type:"float",name:"smoothing",default:.01}],glsl:`   vec2 st = _st * 2. - 1.;
   // Angle and radius from the current pixel
   float a = atan(st.x,st.y)+3.1416;
   float r = (2.*3.1416)/sides;
   float d = cos(floor(.5+a/r)*r-a)*length(st);
   return vec4(vec3(1.0-smoothstep(radius,radius + smoothing + 0.0000001,d)), 1.0);`},{name:"gradient",type:"src",inputs:[{type:"float",name:"speed",default:0}],glsl:"   return vec4(_st, sin(time*speed), 1.0);"},{name:"src",type:"src",inputs:[{type:"sampler2D",name:"tex",default:NaN}],glsl:"return texture2D(tex, fract(vec2(_st.x, 1.0 - _st.y)));"},{name:"solid",type:"src",inputs:[{type:"float",name:"r",default:0},{type:"float",name:"g",default:0},{type:"float",name:"b",default:0},{type:"float",name:"a",default:1}],glsl:"   return vec4(r, g, b, a);"}],j=[{name:"rotate",type:"coord",inputs:[{type:"float",name:"angle",default:10},{type:"float",name:"speed",default:0}],glsl:`   vec2 xy = _st - vec2(0.5);
   float ang = angle + speed *time;
   xy = mat2(cos(ang),-sin(ang), sin(ang),cos(ang))*xy;
   xy += 0.5;
   return xy;`},{name:"scale",type:"coord",inputs:[{type:"float",name:"amount",default:1.5},{type:"float",name:"xMult",default:1},{type:"float",name:"yMult",default:1},{type:"float",name:"offsetX",default:.5},{type:"float",name:"offsetY",default:.5}],glsl:`   vec2 xy = _st - vec2(offsetX, offsetY);
   xy*=(1.0/vec2(amount*xMult, amount*yMult));
   xy+=vec2(offsetX, offsetY);
   return xy;
   `},{name:"pixelate",type:"coord",inputs:[{type:"float",name:"pixelX",default:20},{type:"float",name:"pixelY",default:20}],glsl:`   vec2 xy = vec2(pixelX, pixelY);
   return (floor(_st * xy) + 0.5)/xy;`},{name:"posterize",type:"color",inputs:[{type:"float",name:"bins",default:3},{type:"float",name:"gamma",default:.6}],glsl:`   vec4 c2 = pow(_c0, vec4(gamma));
   c2 *= vec4(bins);
   c2 = floor(c2);
   c2/= vec4(bins);
   c2 = pow(c2, vec4(1.0/gamma));
   return vec4(c2.xyz, _c0.a);`},{name:"shift",type:"color",inputs:[{type:"float",name:"r",default:.5},{type:"float",name:"g",default:0},{type:"float",name:"b",default:0},{type:"float",name:"a",default:0}],glsl:`   vec4 c2 = vec4(_c0);
   c2.r = fract(c2.r + r);
   c2.g = fract(c2.g + g);
   c2.b = fract(c2.b + b);
   c2.a = fract(c2.a + a);
   return vec4(c2.rgba);`},{name:"repeat",type:"coord",inputs:[{type:"float",name:"repeatX",default:3},{type:"float",name:"repeatY",default:3},{type:"float",name:"offsetX",default:0},{type:"float",name:"offsetY",default:0}],glsl:`   vec2 st = _st * vec2(repeatX, repeatY);
   st.x += step(1., mod(st.y,2.0)) * offsetX;
   st.y += step(1., mod(st.x,2.0)) * offsetY;
   return fract(st);`},{name:"modulateRepeat",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"repeatX",default:3},{type:"float",name:"repeatY",default:3},{type:"float",name:"offsetX",default:.5},{type:"float",name:"offsetY",default:.5}],glsl:`   vec2 st = _st * vec2(repeatX, repeatY);
   st.x += step(1., mod(st.y,2.0)) + color.r * offsetX;
   st.y += step(1., mod(st.x,2.0)) + color.g * offsetY;
   return fract(st);`},{name:"repeatX",type:"coord",inputs:[{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:0}],glsl:`   vec2 st = _st * vec2(reps, 1.0);
   //  float f =  mod(_st.y,2.0);
   st.y += step(1., mod(st.x,2.0))* offset;
   return fract(st);`},{name:"modulateRepeatX",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:.5}],glsl:`   vec2 st = _st * vec2(reps, 1.0);
   //  float f =  mod(_st.y,2.0);
   st.y += step(1., mod(st.x,2.0)) + color.r * offset;
   return fract(st);`},{name:"repeatY",type:"coord",inputs:[{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:0}],glsl:`   vec2 st = _st * vec2(1.0, reps);
   //  float f =  mod(_st.y,2.0);
   st.x += step(1., mod(st.y,2.0))* offset;
   return fract(st);`},{name:"modulateRepeatY",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:.5}],glsl:`   vec2 st = _st * vec2(reps, 1.0);
   //  float f =  mod(_st.y,2.0);
   st.x += step(1., mod(st.y,2.0)) + color.r * offset;
   return fract(st);`},{name:"kaleid",type:"coord",inputs:[{type:"float",name:"nSides",default:4}],glsl:`   vec2 st = _st;
   st -= 0.5;
   float r = length(st);
   float a = atan(st.y, st.x);
   float pi = 2.*3.1416;
   a = mod(a,pi/nSides);
   a = abs(a-pi/nSides/2.);
   return r*vec2(cos(a), sin(a));`},{name:"modulateKaleid",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"nSides",default:4}],glsl:`   vec2 st = _st - 0.5;
   float r = length(st);
   float a = atan(st.y, st.x);
   float pi = 2.*3.1416;
   a = mod(a,pi/nSides);
   a = abs(a-pi/nSides/2.);
   return (color.r+r)*vec2(cos(a), sin(a));`},{name:"scroll",type:"coord",inputs:[{type:"float",name:"scrollX",default:.5},{type:"float",name:"scrollY",default:.5},{type:"float",name:"speedX",default:0},{type:"float",name:"speedY",default:0}],glsl:`
   _st.x += scrollX + time*speedX;
   _st.y += scrollY + time*speedY;
   return fract(_st);`},{name:"scrollX",type:"coord",inputs:[{type:"float",name:"scrollX",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.x += scrollX + time*speed;
   return fract(_st);`},{name:"modulateScrollX",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"scrollX",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.x += color.r*scrollX + time*speed;
   return fract(_st);`},{name:"scrollY",type:"coord",inputs:[{type:"float",name:"scrollY",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.y += scrollY + time*speed;
   return fract(_st);`},{name:"modulateScrollY",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"scrollY",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.y += color.r*scrollY + time*speed;
   return fract(_st);`},{name:"add",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"amount",default:1}],glsl:"   return (_c0+color)*amount + _c0*(1.0-amount);"},{name:"sub",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"amount",default:1}],glsl:"   return (_c0-color)*amount + _c0*(1.0-amount);"},{name:"layer",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4}],glsl:"   return vec4(mix(_c0.rgb, color.rgb, color.a), _c0.a+color.a);"},{name:"blend",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"amount",default:.5}],glsl:"   return _c0*(1.0-amount)+color*amount;"},{name:"mult",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"amount",default:1}],glsl:"   return _c0*(1.0-amount)+(_c0*color)*amount;"},{name:"diff",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4}],glsl:"   return vec4(abs(_c0.rgb-color.rgb), max(_c0.a, color.a));"},{name:"modulate",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"amount",default:.1}],glsl:`   //  return fract(st+(color.xy-0.5)*amount);
   return _st + color.xy*amount;`},{name:"modulateScale",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"multiple",default:1},{type:"float",name:"offset",default:1}],glsl:`   vec2 xy = _st - vec2(0.5);
   xy*=(1.0/vec2(offset + multiple*color.r, offset + multiple*color.g));
   xy+=vec2(0.5);
   return xy;`},{name:"modulatePixelate",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"multiple",default:10},{type:"float",name:"offset",default:3}],glsl:`   vec2 xy = vec2(offset + color.x*multiple, offset + color.y*multiple);
   return (floor(_st * xy) + 0.5)/xy;`},{name:"modulateRotate",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"multiple",default:1},{type:"float",name:"offset",default:0}],glsl:`   vec2 xy = _st - vec2(0.5);
   float angle = offset + color.x * multiple;
   xy = mat2(cos(angle),-sin(angle), sin(angle),cos(angle))*xy;
   xy += 0.5;
   return xy;`},{name:"modulateHue",type:"combineCoord",inputs:[{name:"color",type:"vec4",vecLen:4},{type:"float",name:"amount",default:1}],glsl:"   return _st + (vec2(color.g - color.r, color.b - color.g) * amount * 1.0/resolution);"},{name:"invert",type:"color",inputs:[{type:"float",name:"amount",default:1}],glsl:"   return vec4((1.0-_c0.rgb)*amount + _c0.rgb*(1.0-amount), _c0.a);"},{name:"contrast",type:"color",inputs:[{type:"float",name:"amount",default:1.6}],glsl:`   vec4 c = (_c0-vec4(0.5))*vec4(amount) + vec4(0.5);
   return vec4(c.rgb, _c0.a);`},{name:"brightness",type:"color",inputs:[{type:"float",name:"amount",default:.4}],glsl:"   return vec4(_c0.rgb + vec3(amount), _c0.a);"},{name:"mask",type:"combine",inputs:[{name:"color",type:"vec4",vecLen:4}],glsl:`   float a = _luminance(color.rgb);
   return vec4(_c0.rgb*a, a);`},{name:"luma",type:"color",inputs:[{type:"float",name:"threshold",default:.5},{type:"float",name:"tolerance",default:.1}],glsl:`   float a = smoothstep(threshold-(tolerance+0.0000001), threshold+(tolerance+0.0000001), _luminance(_c0.rgb));
   return vec4(_c0.rgb*a, a);`},{name:"thresh",type:"color",inputs:[{type:"float",name:"threshold",default:.5},{type:"float",name:"tolerance",default:.04}],glsl:"   return vec4(vec3(smoothstep(threshold-(tolerance+0.0000001), threshold+(tolerance+0.0000001), _luminance(_c0.rgb))), _c0.a);"},{name:"color",type:"color",inputs:[{type:"float",name:"r",default:1},{type:"float",name:"g",default:1},{type:"float",name:"b",default:1},{type:"float",name:"a",default:1}],glsl:`   vec4 c = vec4(r, g, b, a);
   vec4 pos = step(0.0, c); // detect whether negative
   // if > 0, return r * _c0
   // if < 0 return (1.0-r) * _c0
   return vec4(mix((1.0-_c0)*abs(c), c*_c0, pos));`},{name:"saturate",type:"color",inputs:[{type:"float",name:"amount",default:2}],glsl:`   const vec3 W = vec3(0.2125, 0.7154, 0.0721);
   vec3 intensity = vec3(dot(_c0.rgb, W));
   return vec4(mix(intensity, _c0.rgb, amount), _c0.a);`},{name:"hue",type:"color",inputs:[{type:"float",name:"hue",default:.4}],glsl:`   vec3 c = _rgbToHsv(_c0.rgb);
   c.r += hue;
   //  c.r = fract(c.r);
   return vec4(_hsvToRgb(c), _c0.a);`},{name:"colorama",type:"color",inputs:[{type:"float",name:"amount",default:.005}],glsl:`   vec3 c = _rgbToHsv(_c0.rgb);
   c += vec3(amount);
   c = _hsvToRgb(c);
   c = fract(c);
   return vec4(c, _c0.a);`},{name:"sum",type:"color",inputs:[{type:"vec4",name:"scale",default:1}],glsl:`   vec4 v = _c0 * s;
   return v.r + v.g + v.b + v.a;
   }
   float sum(vec2 _st, vec4 s) { // vec4 is not a typo, because argument type is not overloaded
   vec2 v = _st.xy * s.xy;
   return v.x + v.y;`},{name:"r",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.r * scale + offset);"},{name:"g",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.g * scale + offset);"},{name:"b",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.b * scale + offset);"},{name:"a",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.a * scale + offset);"}],b=$(j),q=L(S,b),{gradient:k,noise:N,osc:O,shape:U,solid:w,src:z,voronoi:D}=q;var G=Object.freeze({__proto__:null,TransformChainClass:b,gradient:k,noise:N,osc:O,shape:U,solid:w,src:z,voronoi:D});const E=()=>{};function F(a,e,t=E){const{transform:n,userArgs:l}=a,{inputs:r=[]}=n;return r.map((o,f)=>{const s=o.vecLen??0;let c=o.default,u=!1;if(o.type==="float"&&(c=h(c)),l.length>f){const i=l[f];c=i,typeof i=="function"?(s>0?c=(d,m)=>x(i(m),s):c=(d,m)=>{try{return i(m)}catch(p){return t(p,{transformName:n.name,transformType:n.type,paramName:o.name,paramIndex:f,paramType:o.type}),o.default}},u=!0):Array.isArray(i)&&(s>0?(u=!0,c=x(c,s)):(c=(d,m)=>Y.getValue(i)(m),u=!0))}if(c instanceof X)u=!1;else if(o.type==="float"&&typeof c=="number")c=h(c);else if(o.type.startsWith("vec")&&Array.isArray(c))u=!1,c=`${o.type}(${c.map(h).join(", ")})`;else if(o.type==="sampler2D"){const i=c;c=()=>i.getTexture(),u=!0}else(c instanceof _||c instanceof C)&&(c=z(c),u=!1);let{name:v}=o;return u&&(v+=e),{value:c,type:o.type,isUniform:u,vecLen:s,name:v}})}function h(a){return a=a.toString(),a.indexOf(".")<0&&(a+="."),a}function x(a,e){for(;a.length<e;)a.length===3?a.push(1):a.push(0);return a.slice(0,e)}function g(a,e,t){let n=()=>"";return a.forEach(l=>{let r;const o=F(l,e.uniforms.length,t);o.forEach(s=>{s.isUniform&&e.uniforms.push(s)}),I(l,e.transformApplications)||e.transformApplications.push(l);const f=n;l.transform.type==="src"?n=s=>`${y(s,l,o,e,t)}`:l.transform.type==="coord"?n=s=>`${f(`${y(s,l,o,e,t)}`)}`:l.transform.type==="color"?n=s=>`${y(`${f(s)}`,l,o,e,t)}`:l.transform.type==="combine"?(r=o[0].value&&o[0].value.transforms?s=>`${g(o[0].value.transforms,e,t)(s)}`:o[0].isUniform?()=>o[0].name:()=>o[0].value,n=s=>`${y(`${f(s)}, ${r(s)}`,l,o.slice(1),e,t)}`):l.transform.type==="combineCoord"&&(r=o[0].value&&o[0].value.transforms?s=>`${g(o[0].value.transforms,e,t)(s)}`:o[0].isUniform?()=>o[0].name:()=>o[0].value,n=s=>`${f(`${y(`${s}, ${r(s)}`,l,o.slice(1),e,t)}`)}`)}),n}function y(a,e,t,n,l){const r=t.map(o=>o.isUniform?o.name:o.value&&o.value.transforms?`${g(o.value.transforms,n,l)("st")}`:o.value).reduce((o,f)=>`${o}, ${f}`,"");return`${e.transform.name}(${a}${r})`}function I(a,e){for(let t=0;t<e.length;t++)if(a.transform.name==e[t].transform.name)return!0;return!1}function W(a,e){const t=K(a,e.onError),n={};return t.uniforms.forEach(r=>{n[r.name]=r.value}),{frag:`
  precision ${e.precision} float;
  ${Object.values(t.uniforms).map(r=>`
      uniform ${r.type} ${r.name};`).join("")}
  uniform float time;
  uniform vec2 resolution;
  varying vec2 uv;

  ${Object.values(T).map(r=>`
            ${r.glsl}
          `).join("")}

  ${t.transformApplications.map(r=>`
            ${r.transform.glsl}
          `).join("")}

  void main () {
    vec4 c = vec4(1, 0, 0, 1);
    vec2 st = gl_FragCoord.xy/resolution.xy;
    gl_FragColor = ${t.fragColor};
  }
  `,uniforms:{...e.defaultUniforms,...n}}}function K(a,e){const t={uniforms:[],transformApplications:[],fragColor:""};t.fragColor=g(a,t,e)("st");const n={};return t.uniforms.forEach(l=>n[l.name]=l),t.uniforms=Object.values(n),t}class C{attributes;_draw;fbos;environment;vert;pingPongIndex=0;constructor(e){this.environment=e,this._draw=()=>{},this.vert=`
  precision ${e.precision} float;
  attribute vec2 position;
  varying vec2 uv;

  void main () {
    uv = position;
    gl_Position = vec4(2.0 * position - 1.0, 0, 1);
  }`,this.attributes={position:e.regl.buffer([[-2,0],[0,-2],[2,2]])},this.fbos=Array(2).fill(void 0).map(()=>e.regl.framebuffer({color:e.regl.texture({mag:"nearest",width:e.width,height:e.height,format:"rgba"}),depthStencil:!1}))}resize(e,t){this.fbos.forEach(n=>{n.resize(e,t)})}getCurrent(){return this.fbos[this.pingPongIndex]}getTexture(){const e=this.pingPongIndex?0:1;return this.fbos[e]}tick(e){try{this._draw(e)}catch(t){this.environment.onError&&this.environment.onError(t,{transformName:"draw",transformType:"render",paramName:"output",paramIndex:0,paramType:"framebuffer"})}}render(e){if(e.length===0)return;const t=W(e,this.environment);this._draw=this.environment.regl({frag:t.frag,vert:this.vert,attributes:this.attributes,uniforms:t.uniforms,count:3,framebuffer:()=>(this.pingPongIndex=this.pingPongIndex?0:1,this.fbos[this.pingPongIndex])})}}class R{#o=performance.now();#t=!1;#e;#s;constructor(e){this.#s=e}start=()=>this.#t?this:(this.#t=!0,this.#o=performance.now(),this.#e=requestAnimationFrame(this.tick),this);stop=()=>(this.#t=!1,this.#e&&cancelAnimationFrame(this.#e),this.#e=void 0,this);toggle=()=>(this.#t?this.stop():this.start(),this);tick=()=>{this.#e=requestAnimationFrame(this.tick);const e=performance.now(),t=e-this.#o;return this.#s(t),this.#o=e,this}}class A{loop;synth;outputs;sources;glEnvironment;output;renderFbo;timeSinceLastUpdate=0;constructor({height:e,numOutputs:t=4,numSources:n=4,precision:l="mediump",regl:r,width:o,onError:f}){const s=[],c=[],u={bpm:30,fps:void 0,resolution:[o,e],speed:1,stats:{fps:0},time:0},v={time:r.prop("time"),resolution:r.prop("resolution")},i={regl:r,width:o,height:e,precision:l,defaultUniforms:v,onError:f};this.glEnvironment=i;const d=r({frag:`
      precision ${i.precision} float;
      varying vec2 uv;
      uniform vec2 resolution;
      uniform sampler2D tex0;

      void main () {
        gl_FragColor = texture2D(tex0, vec2(1.0 - uv.x, uv.y));
      }
      `,vert:`
      precision ${i.precision} float;
      attribute vec2 position;
      varying vec2 uv;

      void main () {
        uv = position;
        gl_Position = vec4(1.0 - 2.0 * position, 0, 1);
      }`,attributes:{position:[[-2,0],[0,-2],[2,2]]},uniforms:{tex0:r.prop("tex0"),resolution:r.prop("resolution")},count:3,depth:{enable:!1}});for(let m=0;m<n;m++){const p=new _(i);c.push(p)}for(let m=0;m<t;m++){const p=new C(i);s.push(p)}this.loop=new R(this.tick),this.outputs=s,this.sources=c,this.synth=u,this.output=s[0],this.renderFbo=d}hush=()=>{this.outputs.forEach(e=>{w(1,1,1,0).out(e)})};setResolution=(e,t)=>{this.synth.resolution=[e,t],this.outputs.forEach(n=>{n.resize(e,t)})};render=e=>{this.output=e??this.outputs[0]};tick=e=>{this.synth.time+=e*.001*this.synth.speed,this.timeSinceLastUpdate+=e,(!this.synth.fps||this.timeSinceLastUpdate>=1e3/this.synth.fps)&&(this.synth.stats.fps=Math.ceil(1e3/this.timeSinceLastUpdate),this.sources.forEach(t=>{t.tick()}),this.outputs.forEach(t=>{t.tick(this.synth)}),this.renderFbo({tex0:this.output.getCurrent(),resolution:this.synth.resolution}),this.timeSinceLastUpdate=0)}}export{A as Hydra,C as Output,_ as Source,L as createGenerators,$ as createTransformChainClass,S as defaultGenerators,j as defaultModifiers,G as generators};
