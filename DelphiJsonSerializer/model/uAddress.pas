unit uAddress;

interface

uses
  System.Classes;

type
  TAddress = class(TObject)
  private
    FStreet: String;
    FNumber: string;
  public
    constructor Create(AOwner: TComponent);
  published
    property Street: String read FStreet write FStreet;
    property Number: string read FNumber write FNumber;
  end;

implementation



{ TAddress }

constructor TAddress.Create(AOwner: TComponent);
begin
  inherited Create;
end;

end.
