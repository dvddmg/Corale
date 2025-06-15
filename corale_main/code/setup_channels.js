inlets = 1
outlets = 1

var p = this.patcher
var inp = p.getnamed("unpucker")
var out = p.getnamed("pucker")

function createObjects(id, ip){
	var bpatch
	if(id <= 4){
		bpatch = p.newdefault(391*id-1, 181, "bpatcher @name db.channel_strip_aoo @args " + id + " " + ip + " @presentation_rect " + 391*(id-1) + " 450 391 181 @presentation 1 @patching_rect 375 704 391 181");
	} else {
		bpatch = p.newdefault(391*((id-1)%4), 181*2, "bpatcher @name db.channel_strip_aoo @args " + id + " " + ip + " @presentation_rect " + 391*((id-1)%4) + " 631 391 181 @presentation 1 @patching_rect 375 704 391 181");
	}
	
	p.connect(inp, id-1, bpatch, 0);
	p.connect(bpatch, 0, out, id-1);
	//post("connect")
	
}