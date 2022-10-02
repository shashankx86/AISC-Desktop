; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "AISC Desktop"
#define MyAppVersion "2.1.0"
#define MyAppPublisher "shashankx86"
#define MyAppURL "https://github.com/shashankx86/AISC-Desktop"
#define MyAppExeName "AISC Desktop.exe"

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{A91B8A1B-9EC5-4428-A241-94F927947B33}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DisableProgramGroupPage=yes
UninstallDisplayIcon={app}\{#MyAppExeName}
UninstallDisplayName={#MyAppName}   
LicenseFile=.\LICENSE
; Uncomment the following line to run in non administrative install mode (install for current user only.)
;PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=commandline
OutputBaseFilename=setup_x32
SetupIconFile=\icon\aisc_round.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: ".\dist\win-ia32-unpacked\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\chrome_100_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\chrome_200_percent.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\d3dcompiler_47.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\ffmpeg.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\icudtl.dat"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\libEGL.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\libGLESv2.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\LICENSE.electron.txt"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\LICENSES.chromium.html"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\resources.pak"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\snapshot_blob.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\v8_context_snapshot.bin"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\vk_swiftshader.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\vk_swiftshader_icd.json"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\vulkan-1.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: ".\dist\win-ia32-unpacked\resources\*"; DestDir: "{app}\resources"; Flags: ignoreversion recursesubdirs
Source: ".\dist\win-ia32-unpacked\locales\*"; DestDir: "{app}\locales"; Flags: ignoreversion recursesubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
