unit ServiceRestJson;

interface

uses
  REST.JSON,
  uPeople;

type
  TServiceRestJson = class
    FPeople: TPeople;
  private
  public
    constructor Create(aPeople :TPeople);
    destructor Destroy; override;
    function GetJson: string;
    function GetPeople(const aJson: string): TPeople;
  end;

implementation

{ TServiceRestJson }

constructor TServiceRestJson.Create(aPeople: TPeople);
begin
  FPeople := TPeople.Create(nil);
  FPeople.Name := aPeople.Name;
  FPeople.Age := aPeople.Age;
  FPeople.Address.Street := aPeople.Address.Street;
  FPeople.Address.Number := aPeople.Address.Number;
end;

destructor TServiceRestJson.Destroy;
begin
  if Assigned(FPeople) then
    FPeople.Free;
  inherited;
end;

function TServiceRestJson.GetJson(): string;
begin
  Result := TJSON.ObjectToJsonString(FPeople);
end;

function TServiceRestJson.GetPeople(const aJson: string): TPeople;
begin
  Result := TJson.JsonToObject<TPeople>(aJson);
  FPeople.Assign(Result);
end;

end.
