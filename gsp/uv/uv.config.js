self.__uv$config = {
    prefix: 'https://codingcopyandpaste.mywire.org/gps/uv',
    bare:'https://bare.benrogo.net/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://codingcopyandpaste.mywire.org/gps/uv/uv.handler.js',
    bundle: 'https://codingcopyandpaste.mywire.org/gps/uv/uv.bundle.js',
    config: 'https://codingcopyandpaste.mywire.org/gps/uv/uv.config.js',
    sw: 'https://codingcopyandpaste.mywire.org/gps/uv/uv.sw.js',
};
