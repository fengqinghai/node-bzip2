When I installed node-bzip2 in the elelctron-vite project, an error occurred:
  configure_bzip2
  -- Building for: Visual Studio 17 2022
  -- Selecting Windows SDK version 10.0.26100.0 to target Windows 10.0.22631.
  -- The C compiler identification is MSVC 19.44.35209.0
  -- Detecting C compiler ABI info
  -- Detecting C compiler ABI info - done
  -- Check for working C compiler: D:/VisualStudio/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe - skipped
  -- Detecting C compile features
  -- Detecting C compile features - done
  -- Found Python3: C:/Users/tom/AppData/Local/Programs/Python/Python312/python.exe (found version "3.12.4") found components: Interpreter 
  Python 3 package 'pytest' is not installed for C:/Users/tom/AppData/Local/Programs/Python/Python312/python.exe and is not available in your PATH.
  Failed unit tests will be easier to read if you install pytest.
  Eg:  python3 -m pip install --user pytest
  -- Looking for arpa/inet.h
  -- Looking for arpa/inet.h - not found
  -- Looking for fcntl.h
  -- Looking for fcntl.h - found
  -- Looking for inttypes.h
  -- Looking for inttypes.h - found
  -- Looking for limits.h
  -- Looking for limits.h - found
  -- Looking for netdb.h
  -- Looking for netdb.h - not found
  -- Looking for netinet/in.h
  -- Looking for netinet/in.h - not found
  -- Looking for pwd.h
  -- Looking for pwd.h - not found
  -- Looking for sys/socket.h
  -- Looking for sys/socket.h - not found
  -- Looking for sys/time.h
  -- Looking for sys/time.h - not found
  -- Looking for syslog.h
  -- Looking for syslog.h - not found
  -- Looking for time.h
  -- Looking for time.h - found
  -- Looking for unistd.h
  -- Looking for unistd.h - not found
  -- Looking for sys/types.h
  -- Looking for sys/types.h - found
  -- Looking for stdint.h
  -- Looking for stdint.h - found
  -- Looking for stddef.h
  -- Looking for stddef.h - found
  -- Check size of ssize_t
  -- Check size of ssize_t - failed
  -- Performing Test HAVE_STRUCT_TM_TM_GMTOFF
  -- Performing Test HAVE_STRUCT_TM_TM_GMTOFF - Failed
  -- Looking for _Exit
  -- Looking for _Exit - found
  -- Looking for accept4
  -- Looking for accept4 - not found
  -- Looking for mkostemp
  -- Looking for mkostemp - not found
  -- Looking for initgroups
  -- Looking for initgroups - not found
  -- Summary of build options:

      Package version: 1.1.0
      Library version: 1:9:0
      Install prefix:  C:/Program Files (x86)/bzip2
      Target system:   Windows
      Compiler:
          Build type:     Release
          C compiler:     D:/VisualStudio/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe
          CFLAGS:         /MD /O2 /Ob2   /DWIN32 /D_WINDOWS /W3
          WARNCFLAGS:
      Test:
          Python:         TRUE (3.12.4, C:/Users/tom/AppData/Local/Programs/Python/Python312/python.exe)
      Docs:
          Build docs:     OFF
      Features:
          Applications:   OFF
          Examples:       OFF

  Only the library will be built. To build other components (such as applications and examples), set ENABLE_LIB_ONLY=OFF.
  -- Configuring done (38.5s)
  -- Generating done (0.1s)
  -- Build files have been written to: C:/Users/tom/Desktop/code/electron/node_modules/node-bzip2/build/Release/obj/node_bzip2/bzip2
  build_bzip2
  閫傜敤浜?.NET Framework MSBuild 鐗堟湰 17.14.10+8b8e13593

    1>Checking Build System
    Building Custom Rule C:/Users/tom/Desktop/code/electron/node_modules/node-bzip2/lib/bzip2/CMakeLists.txt
    blocksort.c
    huffman.c
    crctable.c
    randtable.c
    compress.c
    decompress.c
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\compress.c(205,23): warning C4244: 鈥?鈥? 浠庘€淿_int64鈥濊浆鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
    bzlib.c
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(998,15): warning C4267: 鈥?鈥? 浠庘€渟ize_t鈥濊浆鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1057,18): warning C4267: 鈥?鈥? 浠庘€渟ize_t鈥濊浆 鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\ftom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1192,14): warning C4267: 鈥?鈥? 浠庘€渟ize_t鈥濊浆 鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1420,4): warning C4996: 'strcat': This function or variable may be unsafe. Consider using strcat_s instead. To disable deprecation, use _CRT_SECURE_NO_WARNINGS. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1425,7): warning C4996: 'strcat': This function or variable may be unsafe. Consider using strcat_s instead. To disable deprecation, use _CRT_SECURE_NO_WARNINGS. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1431,9): warning C4996: 'setmode': The POSIX name for this item is deprecated. Instead, use the ISO C and C++ conformant name: _setmode. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1433,14): warning C4996: 'fopen': This function or variable may be unsafe. Consider using fopen_s instead. To disable deprecation, use _CRT_SECURE_NO_WARNINGS. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1439,12): warning C4996: 'fdopen': The POSIX name for this item is deprecated. Instead, use the ISO C and C++ conformant name: _fdopen. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
    姝ｅ湪鐢熸垚浠ｇ爜...
    bz2_ObjLib.vcxproj -> C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_ObjLib.dir\Release\bz2_ObjLib.lib
    Building Custom Rule C:/Users/tom/Desktop/code/electron/node_modules/node-bzip2/lib/bzip2/CMakeLists.txt
    blocksort.c
    huffman.c
    crctable.c
    randtable.c
    compress.c
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\compress.c(205,23): warning C4244: 鈥?鈥? 浠庘€淿_int64鈥濊浆鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
    decompress.c
    bzlib.c
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(998,15): warning C4267: 鈥?鈥? 浠庘€渟ize_t鈥濊浆鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1057,18): warning C4267: 鈥?鈥? 浠庘€渟ize_t鈥濊浆 鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1192,14): warning C4267: 鈥?鈥? 浠庘€渟ize_t鈥濊浆 鎹㈠埌鈥淚nt32鈥濓紝鍙兘涓㈠け鏁版嵁 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1420,4): warning C4996: 'strcat': This function or variable may be unsafe. Consider using strcat_s instead. To disable deprecation, use _CRT_SECURE_NO_WARNINGS. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1425,7): warning C4996: 'strcat': This function or variable may be unsafe. Consider using strcat_s instead. To disable deprecation, use _CRT_SECURE_NO_WARNINGS. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1431,9): warning C4996: 'setmode': The POSIX name for this item is deprecated. Instead, use the ISO C and C++ conformant name: _setmode. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1433,14): warning C4996: 'fopen': This function or variable may be unsafe. Consider using fopen_s instead. To disable deprecation, use _CRT_SECURE_NO_WARNINGS. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\lib\bzip2\bzlib.c(1439,12): warning C4996: 'fdopen': The POSIX name for this item is deprecated. Instead, use the ISO C and C++ conformant name: _fdopen. See online help for details. [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\bz2_static.vcxproj] [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
    姝ｅ湪鐢熸垚浠ｇ爜...
    bz2_static.vcxproj -> C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\obj\node_bzip2\bzip2\Release\bz2_static.lib
    Building Custom Rule C:/Users/tom/Desktop/code/electron/node_modules/node-bzip2/lib/bzip2/CMakeLists.txt
cl : 命令行  warning D9025: 正在重写“/MT”(用“/MD”) [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
  node_bzip2_wrapper.cpp
cl : 命令行  warning D9025: 正在重写“/MT”(用“/MD”) [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
  win_delay_load_hook.cc
node_bzip2_wrapper.obj : error LNK2001: 无法解析的外部符号 "__declspec(dllimport) public: class std::shared_ptr<class v8::BackingStore> __cdecl v8::ArrayBuffer::GetBackingStore(void)" (__imp_?GetBackingStore@ArrayBuffer@v8@@QEAA?AV?$shared_ptr@VBackingStore@v8@@@std@@XZ) [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\Release\node_bzip2.node : fatal error LNK1120: 1 个无法解析的外部命令 [C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2\build\node_bzip2.vcxproj]
Error: `D:\VisualStudio\MSBuild\Current\Bin\MSBuild.exe` failed with exit code: 1
    at ChildProcess.onExit (C:\Users\tom\Desktop\code\electron\node_modules\@electron\rebuild\node_modules\node-gyp\lib\build.js:203:23)
    at ChildProcess.emit (node:events:519:28)
    at ChildProcess._handle.onexit (node:internal/child_process:294:12)

✖ Rebuild Failed

An unhandled error occurred inside electron-rebuild
node-gyp failed to rebuild 'C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2'

Error: node-gyp failed to rebuild 'C:\Users\tom\Desktop\code\electron\node_modules\node-bzip2'
    at ChildProcess.<anonymous> (C:\Users\tom\Desktop\code\electron\node_modules\@electron\rebuild\lib\module-type\node-gyp\node-gyp.js:121:24)
    at ChildProcess.emit (node:events:519:28)
    at ChildProcess._handle.onexit (node:internal/child_process:294:12)