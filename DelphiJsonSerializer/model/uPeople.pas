unit uPeople;

interface

uses
  System.Classes, System.SysUtils,
  uAddress;

type
  TPeople = class(TObject)

  private
    FName: string;
    FAge: Integer;
    FAddress: TAddress;
  public
    constructor Create(AOwner: TComponent);
    destructor Destroy;
    function AgeStr: string;
  published
    property Name: string read FName write FName;
    property Age: Integer read FAge write FAge;
    property Address: TAddress read FAddress write FAddress;
  end;

implementation

{ TPeople }

constructor TPeople.Create(AOwner: TComponent);
begin
  inherited Create;
  FAddress := TAddress.Create(aowner);
end;


destructor TPeople.Destroy;
begin
  if Assigned(FAddress) then
    FAddress.Free;
end;

function TPeople.AgeStr(): string;
begin
  Result := IntToStr(Age);
end;

end.
